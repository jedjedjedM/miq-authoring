import create from 'zustand';
import { addEdge, applyEdgeChanges, applyNodeChanges } from 'reactflow';

const initialNodes = [];
const initialEdges = [];

const getEdgeStyle = (handleId) => {
  switch (handleId) {
    case 'newOption':
      return { stroke: 'orange', labelText: 'New Option' };
    case 'newQuestion':
      return { stroke: 'white', labelText: 'New Question' };
    case 'not':
      return { stroke: 'red', labelText: 'NOT' };
    case 'nextQuestion':
      return { stroke: 'green', labelText: 'Next Question' };
    default:
      return { stroke: 'white', labelText: '' };
  }
};
const useStore = create((set, get) => ({
  nodes: initialNodes,
  edges: initialEdges,
  setResultsData: (newResultsData) => set({ resultsData: newResultsData }),
  setBaseUrl: (newBaseUrl) => set({ baseUrl: newBaseUrl }),


  setNodes: (newNodes) => set({ nodes: newNodes }),
  setEdges: (newEdges) => set({ edges: newEdges }),

  getEdgeStyle: (handleId) => {
    return getEdgeStyle(handleId);
  },

  addNode: (newNode) => {
    const currentNodes = get().nodes;
    set({ nodes: [...currentNodes, newNode] });
  },

  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },

  updateNodeData: (nodeId, newData) => {
    set((state) => {
      const nodeIndex = state.nodes.findIndex((n) => n.id === nodeId);
      if (nodeIndex === -1) return;
  
      const updatedNodes = state.nodes.map((node, index) => {
        if (index === nodeIndex) {
          return {
            ...node,
            data: { ...node.data, ...newData },
          };
        }
        return node;
      });
  
      return { nodes: updatedNodes };
    });
  },
  

  onEdgesChange: (changes) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },

  onConnect: (connection) => {
    const { sourceHandle } = connection;
    const { stroke } = getEdgeStyle(sourceHandle);

    const newEdge = {
      ...connection,
      className: 'animated',
      style: { stroke: stroke },
    };

    set((state) => ({
      edges: addEdge(newEdge, state.edges),
    }));
  },
}));

export default useStore;
