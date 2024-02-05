import React from 'react';
import '@spectrum-web-components/textfield/sp-textfield.js';
import '@spectrum-web-components/accordion/sp-accordion.js';
import '@spectrum-web-components/accordion/sp-accordion-item.js';
import '@spectrum-css/table';
import '@spectrum-css/inlinealert';

const Debugger = () => {
  return (
    <div className='container'>
      <h1>Quiz Info &amp; Debugging</h1>
        <div><b>URL:</b> http://main--milo.adobecom.hlx.page/.../quiz.html</div>
        <div><b>Title:</b> UAR Quiz</div>
        <div><b>Author:</b> UAR Team</div>
        <div><b>Created:</b> 2021-05-31T23:00:00Z</div>
        <div><b>Updated:</b> 2021-05-31T23:00:00Z</div>
        <div><b>Status:</b> Published</div>


      <h2>404 Checker</h2>
      <sp-accordion>
        <sp-accordion-item label="Results">
          <div className="spectrum-Table-scroller spectrum-Table spectrum-Table--sizeM spectrum-Table--emphasized spectrum-Table--quiet" style={{ width: '100%' }}>
            <div className="spectrum-Table-main" role="table" style={{ width: '100%' }}>
              <div className="spectrum-Table-head" role="rowgroup">
                <div role="row">
                  <div className="spectrum-Table-headCell is-sortable is-sorted-desc" role="columnheader" aria-sort="descending" tabIndex="0">
                    <svg className="spectrum-Icon spectrum-UIIcon-ArrowDown100 spectrum-Table-sortedIcon" focusable="false" aria-hidden="true">
                      <use xlinkHref="#spectrum-css-icon-Arrow100" />
                    </svg><span className="spectrum-Table-columnTitle">URL</span>
                  </div>
                  <div className="spectrum-Table-headCell is-sortable" role="columnheader" aria-sort="none" tabIndex="0">
                    <svg className="spectrum-Icon spectrum-UIIcon-ArrowDown100 spectrum-Table-sortedIcon" focusable="false" aria-hidden="true">
                      <use xlinkHref="#spectrum-css-icon-Arrow100" />
                    </svg><span className="spectrum-Table-columnTitle">URL Status</span>
                  </div>
                  <div className="spectrum-Table-headCell" role="columnheader">Last Previewed</div>
                  <div className="spectrum-Table-headCell" role="columnheader">Last Published</div>
                </div>
              </div>
              <div className="spectrum-Table-body" role="rowgroup">
                <div className="spectrum-Table-row" role="row">
                  <div className="spectrum-Table-cell" role="cell">https://main--milo--adobecom.hlx.page/fragments/ccx</div>
                  <div className="spectrum-Table-cell" role="cell">200</div>
                  <div className="spectrum-Table-cell" role="cell">2021-05-31T23:00:00Z</div>
                  <div className="spectrum-Table-cell" role="cell">2021-05-31T23:00:00Z</div>
                </div>
                <div className="spectrum-Table-row" role="row">
                  <div className="spectrum-Table-cell" role="cell">https://main--milo--adobecom.hlx.page/fragments/ccx</div>
                  <div className="spectrum-Table-cell" role="cell">200</div>
                  <div className="spectrum-Table-cell" role="cell">2021-05-31T23:00:00Z</div>
                  <div className="spectrum-Table-cell" role="cell">2021-05-31T23:00:00Z</div>
                </div>
              </div>
            </div>
          </div>
        </sp-accordion-item>
        <sp-accordion-item label="Result Fragments">
          <div className="spectrum-Table-scroller spectrum-Table spectrum-Table--sizeM spectrum-Table--emphasized spectrum-Table--quiet" style={{ width: '100%' }}>
            <div className="spectrum-Table-main" role="table" style={{ width: '100%' }}>
              <div className="spectrum-Table-head" role="rowgroup">
                <div role="row">
                  <div className="spectrum-Table-headCell is-sortable is-sorted-desc" role="columnheader" aria-sort="descending" tabIndex="0">
                    <svg className="spectrum-Icon spectrum-UIIcon-ArrowDown100 spectrum-Table-sortedIcon" focusable="false" aria-hidden="true">
                      <use xlinkHref="#spectrum-css-icon-Arrow100" />
                    </svg><span className="spectrum-Table-columnTitle">URL</span>
                  </div>
                  <div className="spectrum-Table-headCell is-sortable" role="columnheader" aria-sort="none" tabIndex="0">
                    <svg className="spectrum-Icon spectrum-UIIcon-ArrowDown100 spectrum-Table-sortedIcon" focusable="false" aria-hidden="true">
                      <use xlinkHref="#spectrum-css-icon-Arrow100" />
                    </svg><span className="spectrum-Table-columnTitle">URL Status</span>
                  </div>
                  <div className="spectrum-Table-headCell" role="columnheader">Last Previewed</div>
                  <div className="spectrum-Table-headCell" role="columnheader">Last Published</div>
                </div>
              </div>
              <div className="spectrum-Table-body" role="rowgroup">
                <div className="spectrum-Table-row" role="row">
                  <div className="spectrum-Table-cell" role="cell">https://main--milo--adobecom.hlx.page/fragments/ccx</div>
                  <div className="spectrum-Table-cell" role="cell">200</div>
                  <div className="spectrum-Table-cell" role="cell">2021-05-31T23:00:00Z</div>
                  <div className="spectrum-Table-cell" role="cell">2021-05-31T23:00:00Z</div>
                </div>
                <div className="spectrum-Table-row" role="row">
                  <div className="spectrum-Table-cell" role="cell">https://main--milo--adobecom.hlx.page/fragments/ccx</div>
                  <div className="spectrum-Table-cell" role="cell">200</div>
                  <div className="spectrum-Table-cell" role="cell">2021-05-31T23:00:00Z</div>
                  <div className="spectrum-Table-cell" role="cell">2021-05-31T23:00:00Z</div>
                </div>
              </div>
            </div>
          </div>
        </sp-accordion-item>
        <sp-accordion-item label="Result Destination">
          <div className="spectrum-Table-scroller spectrum-Table spectrum-Table--sizeM spectrum-Table--emphasized spectrum-Table--quiet" style={{ width: '100%' }}>
            <div className="spectrum-Table-main" role="table" style={{ width: '100%' }}>
              <div className="spectrum-Table-head" role="rowgroup">
                <div role="row">
                  <div className="spectrum-Table-headCell is-sortable is-sorted-desc" role="columnheader" aria-sort="descending" tabIndex="0">
                    <svg className="spectrum-Icon spectrum-UIIcon-ArrowDown100 spectrum-Table-sortedIcon" focusable="false" aria-hidden="true">
                      <use xlinkHref="#spectrum-css-icon-Arrow100" />
                    </svg><span className="spectrum-Table-columnTitle">URL</span>
                  </div>
                  <div className="spectrum-Table-headCell is-sortable" role="columnheader" aria-sort="none" tabIndex="0">
                    <svg className="spectrum-Icon spectrum-UIIcon-ArrowDown100 spectrum-Table-sortedIcon" focusable="false" aria-hidden="true">
                      <use xlinkHref="#spectrum-css-icon-Arrow100" />
                    </svg><span className="spectrum-Table-columnTitle">URL Status</span>
                  </div>
                  <div className="spectrum-Table-headCell" role="columnheader">Last Previewed</div>
                  <div className="spectrum-Table-headCell" role="columnheader">Last Published</div>
                </div>
              </div>
              <div className="spectrum-Table-body" role="rowgroup">
                <div className="spectrum-Table-row" role="row">
                  <div className="spectrum-Table-cell" role="cell">https://main--milo--adobecom.hlx.page/fragments/ccx</div>
                  <div className="spectrum-Table-cell" role="cell">200</div>
                  <div className="spectrum-Table-cell" role="cell">2021-05-31T23:00:00Z</div>
                  <div className="spectrum-Table-cell" role="cell">2021-05-31T23:00:00Z</div>
                </div>
                <div className="spectrum-Table-row" role="row">
                  <div className="spectrum-Table-cell" role="cell">https://main--milo--adobecom.hlx.page/fragments/ccx</div>
                  <div className="spectrum-Table-cell" role="cell">200</div>
                  <div className="spectrum-Table-cell" role="cell">2021-05-31T23:00:00Z</div>
                  <div className="spectrum-Table-cell" role="cell">2021-05-31T23:00:00Z</div>
                </div>
              </div>
            </div>
          </div>
        </sp-accordion-item>
      </sp-accordion>

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
