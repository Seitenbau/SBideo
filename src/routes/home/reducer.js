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
    case 'SAVING_META':
      return {
        ...state,
        newMeta: action.data
      };
    case 'SET_EDIT_MODE':
      return {
        ...state,
        editMode: action.editing
      };
    case 'RETRIEVE_DATA_SUCCESS':
    case 'SAVE_META_SUCCESS':
      return {
        ...state,
        data: action.data,
        newMeta: null
      };
    case 'SAVE_META_FAILURE':
      return {
        ...state,
        newMeta: null
      };
    default:
      return state;
  }
};

export default reducer;
