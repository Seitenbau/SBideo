import crawl from 'tree-crawl';

const initialState = {
  data: [],
  activeVideo: {
    meta: {},
    src: ''
  },
  newData: null,
  editMode: false
};

const reducer = (state = initialState, action) => {
  console.log('reducer', action);
  switch (action.type) {
    case 'SET_ACTIVE_VIDEO':
      return {
        ...state,
        activeVideo: action.video
      };
    case 'SET_EDIT_MODE':
      return {
        ...state,
        editMode: action.editing
      };
    case 'SAVING_META':
      return {
        ...state,
        data: setNewMetaInTree({ items: [...state.data] }, action.newMeta).items
      };
    case 'RETRIEVE_DATA_SUCCESS':
    case 'SAVE_META_SUCCESS':
      return {
        ...state,
        data: action.data
      };
    case 'SAVE_META_FAILURE':
    default:
      return state;
  }
};

const setNewMetaInTree = (tree, newMeta) => {
  crawl(
    tree,
    (node, context) => {
      if (node.meta && node.meta.id === newMeta.id) {
        const newNode = node;
        newNode.meta = newMeta;

        context.parent.items[context.index] = newNode;
        context.replace(newNode);
      }
    },
    { getChildren: node => node.items }
  );
  return tree;
};

export default reducer;
