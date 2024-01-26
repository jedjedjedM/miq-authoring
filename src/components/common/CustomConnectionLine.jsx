import React from 'react';
import myUseStore from '../../store/Store';

const CustomConnectionLine = ({ fromX, fromY, toX, toY, fromHandle }) => {
  const { stroke, labelText } = myUseStore.getState().getEdgeStyle(fromHandle.id);

  // Calculate mid-point for the label
  const midX = (fromX + toX) / 2;
  const midY = (fromY + toY) / 2;

  return (
    <g>
      <path
        fill="none"
        stroke={stroke}
        strokeWidth={2}
        className="animated react-flow__edge-path"
        style={{ stroke: stroke }}
        d={`M${fromX},${fromY} C ${fromX} ${toY} ${fromX} ${toY} ${toX},${toY}`}
      />
      {labelText && <text x={midX} y={midY} fill={stroke}>{labelText}</text>}
    </g>
  );
};

export default CustomConnectionLine;
