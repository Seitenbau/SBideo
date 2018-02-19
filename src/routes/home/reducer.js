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

export default reducer;
