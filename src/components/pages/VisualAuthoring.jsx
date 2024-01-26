import React, { useEffect, useState, useCallback, useRef, useMemo } from 'react';
import ReactFlow, {
  useReactFlow,
  Background,
  Controls,
  MiniMap,
} from 'reactflow';
import myUseStore from '../../store/Store';
import parseData from '../../utils/ParseData';
import QuestionNode from '../nodes/questions/QuestionNode';
import OptionNode from '../nodes/options/OptionNode';
import CustomConnectionLine from '../common/CustomConnectionLine';

const VisualAuthoringPage = () => {

  return (
    <div ref={reactFlowWrapper} style={{ height: '100vh' }}>
      <ReactFlow>
        <Background color="#aaa" gap={20} />
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default VisualAuthoringPage;
