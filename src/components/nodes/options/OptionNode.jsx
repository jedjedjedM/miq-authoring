import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

const OptionNode = ({ id, data, setNodes, setEdges, isConnectable }) => {
const handleNodeIdChange = (event, nodeId) => {
    const newId = event.target.value;
    setNodes((prevNodes) => prevNodes.map(node => node.id === nodeId ? { ...node, id: newId } : node));
    setEdges((prevEdges) => prevEdges.map(edge => ({
        ...edge,
        source: edge.source === nodeId ? newId : edge.source,
        target: edge.target === nodeId ? newId : edge.target,
    })));
};  
    return (
        <div style={{ height: '330px', width: '400px', padding: '20px', background: 'rgb(29, 29, 29, 0.4)', border: '1px solid #rgb(29, 29, 29)', borderRadius: '15px', display: 'grid' }}>
            <Handle type="target" position="top" style={{ visibility: 'hidden' }} />
            <h3 className="spectrum-Heading spectrum-Heading--sizeM">Option: {id} </h3>
            <div className="spectrum-Form-item">
                <sp-field-label class="spectrum-FieldLabel spectrum-FieldLabel--sizeM spectrum-Form-itemLabel spectrum-FieldLabel--right" for="node-optionID" onChange={(e) => handleNodeIdChange(e, id)}>Option ID {id} {id? ":" + id : ""}</sp-field-label>
                <div className="spectrum-Form-itemField">
                    <div className="spectrum-Textfield">
                        <sp-textfield id="node-optionID" placeholder="optionid" value={id} onChange={(e) => handleNodeIdChange(e, id)}></sp-textfield>
                    </div>
                </div>
            </div>
            <div className="spectrum-Form-item">
                <sp-field-label class="spectrum-FieldLabel spectrum-FieldLabel--sizeM spectrum-Form-itemLabel spectrum-FieldLabel--right" for="node-optionTitle">Title</sp-field-label>
                <div className="spectrum-Form-itemField">
                    <div className="spectrum-Textfield">
                        <sp-textfield id="node-optionTitle" placeholder="Option Title" value={data.title}></sp-textfield>
                    </div>
                </div>
            </div>
            <div className="spectrum-Form-item">
                <sp-field-label class="spectrum-FieldLabel spectrum-FieldLabel--sizeM spectrum-Form-itemLabel spectrum-FieldLabel--right" for="node-optionText">Text</sp-field-label>
                <div className="spectrum-Form-itemField">
                    <div className="spectrum-Textfield">
                        <sp-textfield id="node-optionText" placeholder="Option Text" ></sp-textfield>
                    </div>
                </div>
            </div>
            <div className="spectrum-Form-item">
                <sp-field-label class="spectrum-FieldLabel spectrum-FieldLabel--sizeM spectrum-Form-itemLabel spectrum-FieldLabel--right" for="node-optionImage">Image URL</sp-field-label>
                <div className="spectrum-Form-itemField">
                    <div className="spectrum-Textfield">
                        <sp-textfield id="node-optionImage" placeholder="https://" ></sp-textfield>
                    </div>
                </div>
            </div>
            <div className="spectrum-Form-item">
                <sp-field-label class="spectrum-FieldLabel spectrum-FieldLabel--sizeM spectrum-Form-itemLabel spectrum-FieldLabel--right" for="node-optionCover">Cover Image URL</sp-field-label>
                <div className="spectrum-Form-itemField">
                    <div className="spectrum-Textfield">
                        <sp-textfield id="node-optionCover" placeholder="https://" ></sp-textfield>
                    </div>
                </div>
            </div>

            <div className="spectrum-Form-item">
                <sp-field-label class="spectrum-FieldLabel spectrum-FieldLabel--sizeM spectrum-Form-itemLabel spectrum-FieldLabel--right" for="node-q-reset">RESET</sp-field-label>
                <div className="spectrum-Form-itemField">
                    <div className="spectrum-Textfield">
                        <label className="spectrum-Checkbox spectrum-Checkbox--sizeM">
                            <input type="checkbox" className="spectrum-Checkbox-input" id="checkbox-0" />
                            <span className="spectrum-Checkbox-box">
                                <svg className="spectrum-Icon spectrum-UIIcon-Checkmark100 spectrum-Checkbox-checkmark" focusable="false" aria-hidden="true">
                                    <use xlinkHref="#spectrum-css-icon-Checkmark100" />
                                </svg>
                                <svg className="spectrum-Icon spectrum-UIIcon-Dash100 spectrum-Checkbox-partialCheckmark" focusable="false" aria-hidden="true">
                                    <use xlinkHref="#spectrum-css-icon-Dash100" />
                                </svg>
                            </span>
                        </label>
                    </div>
                </div>
            </div>

            <div className="spectrum-Form-item">
                <sp-field-label class="spectrum-FieldLabel spectrum-FieldLabel--sizeM spectrum-Form-itemLabel spectrum-FieldLabel--right" for="node-q-result">RESULT</sp-field-label>
                <div className="spectrum-Form-itemField">
                    <div className="spectrum-Textfield">
                        <label className="spectrum-Checkbox spectrum-Checkbox--sizeM">
                            <input type="checkbox" className="spectrum-Checkbox-input" id="checkbox-0" />
                            <span className="spectrum-Checkbox-box">
                                <svg className="spectrum-Icon spectrum-UIIcon-Checkmark100 spectrum-Checkbox-checkmark" focusable="false" aria-hidden="true">
                                    <use xlinkHref="#spectrum-css-icon-Checkmark100" />
                                </svg>
                                <svg className="spectrum-Icon spectrum-UIIcon-Dash100 spectrum-Checkbox-partialCheckmark" focusable="false" aria-hidden="true">
                                    <use xlinkHref="#spectrum-css-icon-Dash100" />
                                </svg>
                            </span>
                        </label>
                    </div>
                </div>
            </div>
            <Handle id="nextQuestion" type="source" position={Position.Right} className="nextQuestion" isConnectable={isConnectable} />
            <Handle id="not" type="source" position={Position.Right} style={{ top: '55%' }} className="nextQuestionOr" isConnectable={isConnectable} />
        </div>
    );
};

export default memo(OptionNode);
