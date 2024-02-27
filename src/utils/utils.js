// fetch results.json
export async function fetchResultsJson(path) {
    const result = await fetch(path)
    .then((response) => response.json())
    .catch((error) => console.log(`ERROR: Fetching URLs status ${error}`));
  
    return result;
}

// process URLs
export const processUrls = async (urls) => {
    const result = await fetchURLsStatusBySpidy(urls);
    if (result && result.length > 0) {
      return result;
    }
};

// fetch URL status by spidy
export async function fetchURLsStatusBySpidy(urls) {
  const apiUrl = "https://spidy.corp.adobe.com/api/url-http-status";
  const params = {
    urls: urls,
  };

  let result;

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });

    if (response.ok) {
      result = await response.json();
    }
  } catch (error) {
    console.error(`Error: Fetching URLs status ${error}`);
  }

  return result.data;
}

// fetch headers
export async function fetchHeaders(url) {
  const result = {};

  try {
      const response = await fetch(url, { method: 'HEAD' });
      result['url'] = url;
      result['status'] = response.status;
      for (let [key, value] of response.headers) {
          if (key === 'last-modified') {
              result['last-modified'] = value;
          }
      }
  } catch (error) {
      console.error('Error:', error);
      result['url'] = url;
      result['status'] = '404';
  }

  return result;
}

// extract URLs from sheet
export function extractUrls(sheetName, resultsPath) {
  const urls = sheetName.data.flatMap(fragment => Object.values(fragment).filter(url => typeof url === 'string' && (url.startsWith('http') || url.startsWith('/')))
  );

  // Remove duplicate URLs
  let uniqueUrls = [...new Set(urls)];
  const updateUrls = [];

  // Split URLs with comma
  uniqueUrls.forEach((url) => {
    if (url.includes(',')) {
      updateUrls.push(...url.split(','));
    } else if (url.startsWith('/')) {
      // If the URL is a relative path, prepend the website URL
      let parts = resultsPath.split("/");
      let domain = parts.slice(0, 3).join("/");
      updateUrls.push(domain + url);
    } else {
      updateUrls.push(url);
    }
  });

  // Remove duplicate URLs
  uniqueUrls = [...new Set(updateUrls)];
  return uniqueUrls;
}

// check URL status by spidy and fetch headers
export async function handleResults(results, sheetName, resultsPath) {
  const items = results[sheetName];

  if (items && items.data) {
    // Extract URLs from result fragments
    let uniqueUrls = extractUrls(items, resultsPath);

    const statusResults = [];

    // // Process in batches of 20 URLs by calling the Spidy API
    // for (let i = 0; i < uniqueUrls.length; i += 20) {
    //   const updateResults = await processUrls(uniqueUrls.slice(i, i + 20));
    //   if (updateResults) {
    //     statusResults.push(...updateResults);
    //   }
    // }

    // If the resultsPath includes 'www.adobe.com', fetch the headers for the URLs
    const statusResults2 = [];
    for (const url of uniqueUrls) {
      const result = {};
      const result1 = await fetchHeaders(url);
      if (sheetName !== 'result-destination' && (resultsPath.includes('www.adobe.com') || resultsPath.includes('www.stage.adobe.com'))) {
        let urlLive = '';
        if (resultsPath.includes('www.adobe.com')) {
          urlLive = url.replace('www.adobe.com', 'main--cc--adobecom.hlx.live');
        } else {
          urlLive = url.replace('www.stage.adobe.com', 'main--cc--adobecom.hlx.live');
        }
        const result2 = await fetchHeaders(urlLive);
        if (result1 && result2) {
          result['url'] = url;
          result['status'] = (result1.status === 200 && result2.status === 200) ? 200 : 404;
          result['last-modified'] = result1['last-modified'];

          if (result1['last-modified'] === result2['last-modified']) {
            result['cache-status'] = '✅';
          } else {
            result['cache-status'] = '❌';
          }
        }
      } else {
        result['url'] = url;
        result['status'] = result1.status;
        result['last-modified'] = result1['last-modified'];
      }

      statusResults2.push(result);
    }
    statusResults.push(...statusResults2);

    return statusResults.sort((a, b) => b.status - a.status);
  }
}

// validate that the question IDs in questions.json and strings.json match up
export function validateQuestionIds(questions, stringData) {
  const questionIds = questions.questions.map(question => question.id);
  const stringIds = Object.keys(stringData);
  
  const unmatchedQuestionIDs = questionIds.filter(id => !stringIds.includes(id));
  const unmatchedStringIDs = stringIds.filter(id => !questionIds.includes(id));

  if (unmatchedQuestionIDs.length === 0 && unmatchedStringIDs.length === 0) {
   return {
      status: 'valid',
      heading: 'Question IDs',
      body: 'All question IDs in questions.json and strings.json match up.', 
    }
   } else {
    return {
      status: 'invalid',
      heading: 'Question IDs',
      body: `The following question IDs in questions.json do not have a corresponding ID in strings.json: ${unmatchedQuestionIDs.join(', ')}. The following IDs in strings.json do not have a corresponding question ID in questions.json: ${unmatchedStringIDs.join(', ')}.`,
    }
   }
}

// Checks for duplicate IDs within the data (used for both questions and strings)
export function validateDuplicates(data, dataType) {
  const ids = data.map(item => item[dataType === 'questions' ? 'questions' : 'q']);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  console.log('duplicates');
  console.log(duplicates);

  console.log('data');
  console.log(data);

  console.log('dataType');
  console.log(dataType);


  if (duplicates.length === 0) {
    return {
      status: 'valid',
      heading: 'Duplicate Questions',
      body: 'No Duplicates found!',
    }
  } else {
    return {
      status: 'invalid',
      heading: 'Duplicate Questions',
      body: `The following IDs are duplicated:. Please ensure all IDs are unique.`,
    }
  }
}
