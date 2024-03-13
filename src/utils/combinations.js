// Description: This file contains the functions to generate combinations based on the user's selections and the questions data.

// Function to generate single combinations
export function generateSingleCombinations(questionMap, currentQuestionId, currentPath = [], combinations = [], step = 1, userSelections = {}) {
  const currentQuestion = questionMap[currentQuestionId].data;

  currentQuestion.forEach(option => {
    // Clone the userSelections object to avoid mutations affecting other branches
    let newUserSelections = { ...userSelections, [step]: option.options };
    let newPath = [...currentPath, option.options];
    
    const nextQuestions = option.next.split(',');

    nextQuestions.forEach(nextQuestionId => {
      if (nextQuestionId.startsWith('RESET') || nextQuestionId.startsWith('NOT')) {
        // Skip processing for 'RESET' or 'NOT' conditions
        return;
      } else if (nextQuestionId === 'RESULT') {
        // Handle result differently based on the newPath length
        if (newPath.length > 2) {
          combinations.push(Object.values(newUserSelections).join(', '));
        } else if (newPath.length == 2) {
          // Possibly increment step or perform other actions specific to reaching a result
          return;
        }
      } else {
        // Recursive call for next questions, passing cloned selections and incremented step
        generateSingleCombinations(questionMap, nextQuestionId, newPath, combinations, step + 1, newUserSelections);
      }
    });
  });
}

// Function to generate double combinations
export function generateDoubleCombinations(questionMap, currentQuestionId, currentPath = [], combinations = [], step = 1, userSelections = {}, startIndex = 0) {
  const currentQuestion = questionMap[currentQuestionId].data;
  const firstQuestion = questionMap['questions'].data[0].questions;

  if (currentQuestionId ===  firstQuestion && startIndex < currentQuestion.length - 1) {
    // Generate combinations of two options starting from the current startIndex
    for (let nextIndex = startIndex + 1; nextIndex < currentQuestion.length; nextIndex++) {
      const option1 = currentQuestion[startIndex].options;
      const option2 = currentQuestion[nextIndex].options;
      const combinedOption = `${option1}&${option2}`;

      let newPath = [...currentPath, combinedOption];
      userSelections[step] = combinedOption;

      // Find common and unique next questions for both options
      const { commonNextQuestions, uniqueToA, uniqueToB } = findNextQuestions(currentQuestion, startIndex, nextIndex);

      // Process common next questions
      commonNextQuestions.forEach(nextQuestionId => {
        generateDoubleCombinations(questionMap, nextQuestionId, newPath, combinations, step + 1, {...userSelections}, 0);
      });

      // Process unique next questions
      handleUniqueNextQuestions(questionMap, uniqueToA, uniqueToB, newPath, combinations, step + 1, {...userSelections});
    }

    // Continue generating combinations for the next option
    if (startIndex < currentQuestion.length - 2) {
      generateDoubleCombinations(questionMap, currentQuestionId, currentPath, combinations, step, userSelections, startIndex + 1);
    }
  } else if (currentQuestionId !== firstQuestion) {
    // Process other questions similarly to before
    currentQuestion.forEach(option => {
      let newPath = [...currentPath, option.options];
      userSelections[step] = option.options;

      const nextQuestions = option.next.split(',');
      nextQuestions.forEach(nextQuestionId => {
        if (!nextQuestionId.startsWith('NOT') && !nextQuestionId.startsWith('RESET')) {
          if (nextQuestionId === 'RESULT') {
            if (newPath.length > 2) {
              combinations.push(Object.values(userSelections).join(', '));
            }
            if (newPath.length === 2) {
              return;
            }

          } else {
            generateDoubleCombinations(questionMap, nextQuestionId, newPath, combinations, step + 1, {...userSelections}, 0);
          }
        }
      });
    });
  }
}

// Function to find next questions based on two options
function findNextQuestions(currentQuestion, option1Index, option2Index) {
  const nextForOption1 = currentQuestion[option1Index].next.split(',') || [];
  const nextForOption2 = currentQuestion[option2Index].next.split(',') || [];

  const commonNextQuestions = nextForOption1.filter(questionId => nextForOption2.includes(questionId) && !questionId.startsWith('NOT'));
  const uniqueToA = nextForOption1.filter(questionId => !nextForOption2.includes(questionId));
  const uniqueToB = nextForOption2.filter(questionId => !nextForOption1.includes(questionId));

  return { commonNextQuestions, uniqueToA, uniqueToB };
}

// Function to handle unique next questions based on two options
function handleUniqueNextQuestions(questionMap, uniqueToA, uniqueToB, currentPath, combinations, step, userSelections) {

  // remove NOT from the unique paths
  if(uniqueToA[0].startsWith('NOT') || uniqueToB[0].startsWith('NOT')) {
    uniqueToA.splice(0,1);
    uniqueToB.splice(0,1);
    step++;
  }

  uniqueToA.forEach(nextQuestionId1 => {
    const currentQuestion1 = questionMap[nextQuestionId1];
    for (const option1 of currentQuestion1.data) {
      uniqueToB.forEach(nextQuestionId2 => {
        const currentQuestion2 = questionMap[nextQuestionId2];
        for (const option2 of currentQuestion2.data) {
          userSelections[step] = option1.options + '&' + option2.options;
          const newPath = [...currentPath, option1.options + '&' + option2.options];
          const nextQuestions = option2.next.split(',');
          nextQuestions.forEach(nextQuestionId => {
            step++;
            generateDoubleCombinations(questionMap, nextQuestionId, newPath, combinations, step + 1, {...userSelections}, 0);
            step--;
          });
        }
      });
    }
  });
}

// Function to generate triple combinations
export function generateTripleCombinations(questionMap, currentQuestionId, currentPath = [], combinations = [], step = 1, userSelections = {}, startIndex = 0) {
  const currentQuestion = questionMap[currentQuestionId].data;
  const firstQuestion = questionMap['questions'].data[0].questions;

  if (currentQuestionId === firstQuestion && startIndex < currentQuestion.length - 2) {
    // Generate combinations of three options starting from the current startIndex
    for (let nextIndex = startIndex + 1; nextIndex < currentQuestion.length - 1; nextIndex++) {
      for (let thirdIndex = nextIndex + 1; thirdIndex < currentQuestion.length; thirdIndex++) {
        const option1 = currentQuestion[startIndex].options;
        const option2 = currentQuestion[nextIndex].options;
        const option3 = currentQuestion[thirdIndex].options;
        const combinedOption = `${option1}&${option2}&${option3}`;

        let newPath = [...currentPath, combinedOption];
        userSelections[step] = combinedOption;

        // Find common and unique next questions for all three options
        const { commonNextQuestions, uniqueToA, uniqueToB, uniqueToC } = findNextQuestionsTriple(currentQuestion, startIndex, nextIndex, thirdIndex);

        // Process common next questions
        commonNextQuestions.forEach(nextQuestionId => {
          generateTripleCombinations(questionMap, nextQuestionId, newPath, combinations, step + 1, {...userSelections}, 0);
        });

        // Process unique next questions paths for three options
        handleUniqueNextQuestionsTriple(questionMap, uniqueToA, uniqueToB, uniqueToC, newPath, combinations, step + 1, {...userSelections});
      }
    }

    // Continue generating combinations for the next option
    if (startIndex < currentQuestion.length - 3) {
      generateTripleCombinations(questionMap, currentQuestionId, currentPath, combinations, step, userSelections, startIndex + 1);
    }
  } else if (currentQuestionId !== firstQuestion) {
    // Process other questions similarly to before
    currentQuestion.forEach(option => {
      let newPath = [...currentPath, option.options];
      userSelections[step] = option.options;

      const nextQuestions = option.next.split(',');
      nextQuestions.forEach(nextQuestionId => {
        if (!nextQuestionId.startsWith('NOT') && !nextQuestionId.startsWith('RESET')) {
          if (nextQuestionId === 'RESULT') {
            if (newPath.length > 2) {
              combinations.push(Object.values(userSelections).join(', '));
            }
            if (newPath.length === 2) {
              return;
            }

          } else {
            generateTripleCombinations(questionMap, nextQuestionId, newPath, combinations, step + 1, {...userSelections}, 0);
          }
        }
      });
    });
  }
}

function findNextQuestionsTriple(currentQuestion, option1Index, option2Index, option3Index) {
  const nextForOption1 = currentQuestion[option1Index].next.split(',') || [];
  const nextForOption2 = currentQuestion[option2Index].next.split(',') || [];
  const nextForOption3 = currentQuestion[option3Index].next.split(',') || [];

  const commonNextQuestions = nextForOption1.filter(questionId => nextForOption2.includes(questionId) && nextForOption3.includes(questionId) && !questionId.startsWith('NOT'));
  const uniqueToA = nextForOption1.filter(questionId => !nextForOption2.includes(questionId) && !nextForOption3.includes(questionId));
  const uniqueToB = nextForOption2.filter(questionId => !nextForOption1.includes(questionId) && !nextForOption3.includes(questionId));
  const uniqueToC = nextForOption3.filter(questionId => !nextForOption1.includes(questionId) && !nextForOption2.includes(questionId));

  return { commonNextQuestions, uniqueToA, uniqueToB, uniqueToC };
}

function handleUniqueNextQuestionsTriple(questionMap, uniqueToA, uniqueToB, uniqueToC, currentPath, combinations, step, userSelections) {
  if(uniqueToA[0].startsWith('NOT') || uniqueToB[0].startsWith('NOT') || uniqueToC[0].startsWith('NOT')) {
    uniqueToA.splice(0,1);
    uniqueToB.splice(0,1);
    uniqueToC.splice(0,1);
    step++;
  }

  uniqueToA.forEach(nextQuestionId1 => {
    const currentQuestion1 = questionMap[nextQuestionId1];
    for (const option1 of currentQuestion1.data) {
      uniqueToB.forEach(nextQuestionId2 => {
        const currentQuestion2 = questionMap[nextQuestionId2];
        for (const option2 of currentQuestion2.data) {
          uniqueToC.forEach(nextQuestionId3 => {
            const currentQuestion3 = questionMap[nextQuestionId3];
            for (const option3 of currentQuestion3.data) {
              userSelections[step] = option1.options + '&' + option2.options + '&' + option3.options;
              const newPath = [...currentPath, option1.options + '&' + option2.options + '&' + option3.options];
              const nextQuestions = option3.next.split(',');
              nextQuestions.forEach(nextQuestionId => {
                step++;
                generateTripleCombinations(questionMap, nextQuestionId, newPath, combinations, step + 1, {...userSelections}, 0);
                step--;
              });
            }
          });
        }
      });
    }
  });
}

// Function to generate combinations based on the maximum number of questions
export function generateCombinationsBasedOnMax(questionsData, firstQuestion, firstQuestionMax) {
  const allCombinations = {
      '1': [],
      '2': [],
      '3': []
  };

  if (firstQuestionMax >= '1') {
      generateSingleCombinations(questionsData, firstQuestion, [], allCombinations['1'], 1, {});
  }

  if (firstQuestionMax >= '2') {
      generateDoubleCombinations(questionsData, firstQuestion, [], allCombinations['2'], 1, {}, 0);
  }

  if (firstQuestionMax >= '3') {
      generateTripleCombinations(questionsData, firstQuestion, [], allCombinations['3'], 1, {}, 0);
  }

  return allCombinations;
}