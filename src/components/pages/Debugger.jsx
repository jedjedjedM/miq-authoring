import { useState } from 'react';
import UrlsChecker from './UrlsChecker';
import '@spectrum-web-components/textfield/sp-textfield.js';
import '@spectrum-web-components/accordion/sp-accordion.js';
import '@spectrum-web-components/accordion/sp-accordion-item.js';
import '@spectrum-css/table';
import '@spectrum-css/inlinealert';

const Debugger = () => {
  const [selectedWebsite, setSelectedWebsite] = useState('https://main--milo--adobecom.hlx.live/drafts/quiz/quiz-2/');

  const handleSelectChange = (event) => {
    if (event.target.value === 'custom') {
      const customWebsite = prompt('Enter the website URL');
      console.log('customWebsite:', customWebsite);
      setSelectedWebsite(customWebsite);
    } else {
      setSelectedWebsite(event.target.value);
    }
  };

  return (
    <div className='container'>
      <h1>Quiz Info &amp; Debugging</h1>
      <label htmlFor="websites">Selection a website:</label>

      <select name="websites" id="websites" defaultValue="https://main--milo--adobecom.hlx.live/drafts/quiz/quiz-2/" onChange={handleSelectChange}>
        <option value="https://main--milo--adobecom.hlx.live/drafts/quiz/quiz-2/">https://main--milo--adobecom.hlx.live/drafts/quiz/quiz-2/</option>
        <option value="https://www.adobe.com/creativecloud/plan-recommender/">https://www.adobe.com/creativecloud/plan-recommender/quiz</option>
        <option value="https://main--cc--adobecom.hlx.live/creativecloud/plan-recommender/">https://main--cc--adobecom.hlx.live/creativecloud/plan-recommender/quiz</option>
        <option value="https://main--cc--adobecom.hlx.live/products/photoshop/plan-recommender/">https://main--cc--adobecom.hlx.live/products/photoshop/plan-recommender/quiz</option>
        <option value="https://www.stage.adobe.com/products/photoshop/plan-recommender/">https://www.stage.adobe.com/products/photoshop/plan-recommender/quiz</option>
        <option value="custom">Add custom website...</option>
      </select>
      <div><b>Title:</b> UAR Quiz</div>
      <div><b>Author:</b> UAR Team</div>
      <div><b>Created:</b> 2021-05-31T23:00:00Z</div>
      <div><b>Updated:</b> 2021-05-31T23:00:00Z</div>
      <div><b>Status:</b> Published</div>


      <h2>404 Checker</h2>

      {UrlsChecker(selectedWebsite)}

      <h2>Quiz Validation</h2>

      <div className="spectrum-InLineAlert spectrum-InLineAlert--positive">
        <div className="spectrum-InLineAlert-header">
          Question IDs
          <svg className="spectrum-Icon spectrum-Icon--sizeM spectrum-InLineAlert-icon" focusable="false" aria-hidden="true">
            <use xlinkHref="#spectrum-icon-18-CheckmarkCircle" />
          </svg>
        </div>
        <div className="spectrum-InLineAlert-content">All question IDs in questions.json and strings.json match up.</div>
      </div>


      <div className="spectrum-InLineAlert spectrum-InLineAlert--positive">
        <div className="spectrum-InLineAlert-header">
          Duplicate Questions
          <svg className="spectrum-Icon spectrum-Icon--sizeM spectrum-InLineAlert-icon" focusable="false" aria-hidden="true">
            <use xlinkHref="#spectrum-icon-18-CheckmarkCircle" />
          </svg>
        </div>
        <div className="spectrum-InLineAlert-content">No Duplicates found!</div>
      </div>


      <div className="spectrum-InLineAlert spectrum-InLineAlert--positive">
        <div className="spectrum-InLineAlert-header">
          Duplicate Questions
          <svg className="spectrum-Icon spectrum-Icon--sizeM spectrum-InLineAlert-icon" focusable="false" aria-hidden="true">
            <use xlinkHref="#spectrum-icon-18-CheckmarkCircle" />
          </svg>
        </div>
        <div className="spectrum-InLineAlert-content">No Duplicates found!</div>
      </div>

      <div className="spectrum-InLineAlert spectrum-InLineAlert--positive">
        <div className="spectrum-InLineAlert-header">
          Required Structure
          <svg className="spectrum-Icon spectrum-Icon--sizeM spectrum-InLineAlert-icon" focusable="false" aria-hidden="true">
            <use xlinkHref="#spectrum-icon-18-Info" />
          </svg>
        </div>
        <div className="spectrum-InLineAlert-content">Minimum columns needed, etc</div>
      </div>

      <div className="spectrum-InLineAlert spectrum-InLineAlert--negative">
        <div className="spectrum-InLineAlert-header">
          No Connections
          <svg className="spectrum-Icon spectrum-Icon--sizeM spectrum-InLineAlert-icon" focusable="false" aria-hidden="true">
            <use xlinkHref="#spectrum-icon-18-CheckmarkCircle" />
          </svg>
        </div>
        <div className="spectrum-InLineAlert-content">The following questions have no IDs in strings.json: q-rather, q-photo. Please ensure connections match!.</div>
      </div>

      <div className="spectrum-InLineAlert spectrum-InLineAlert--positive">
        <div className="spectrum-InLineAlert-header">
          Positive in-line alert header
          <svg className="spectrum-Icon spectrum-Icon--sizeM spectrum-InLineAlert-icon" focusable="false" aria-hidden="true">
            <use xlinkHref="#spectrum-icon-18-CheckmarkCircle" />
          </svg>
        </div>
        <div className="spectrum-InLineAlert-content">This is an alert.</div>
      </div>

      <h2>Results Validation</h2>
      <div className="spectrum-InLineAlert">
        <div className="spectrum-InLineAlert-header">
          Results Impact
          <svg className="spectrum-Icon spectrum-Icon--sizeM spectrum-InLineAlert-icon" focusable="false" aria-hidden="true">
            <use xlinkHref="#spectrum-icon-18-CheckmarkCircle" />
          </svg>
        </div>
        <div className="spectrum-InLineAlert-content">You have authored 42 questions and have an authoring impact of 3,295.</div>
      </div>

      <div className="spectrum-InLineAlert spectrum-InLineAlert--positive">
        <div className="spectrum-InLineAlert-header">
          All Options Covered
          <svg className="spectrum-Icon spectrum-Icon--sizeM spectrum-InLineAlert-icon" focusable="false" aria-hidden="true">
            <use xlinkHref="#spectrum-icon-18-CheckmarkCircle" />
          </svg>
        </div>
        <div className="spectrum-InLineAlert-content">All possible question/options selections are accounted for in results.</div>
      </div>

      <div className="spectrum-InLineAlert spectrum-InLineAlert--negative">
        <div className="spectrum-InLineAlert-header">
          Missing Connections
          <svg className="spectrum-Icon spectrum-Icon--sizeM spectrum-InLineAlert-icon" focusable="false" aria-hidden="true">
            <use xlinkHref="#spectrum-icon-18-CheckmarkCircle" />
          </svg>
        </div>
        <div className="spectrum-InLineAlert-content">Missing 34 questions/options scenarios. Click here to generate list.</div>
      </div>



    </div>
  );
}
export default Debugger;
