const initialState = {
  data: [],
  activeVideo: null,
  newData: null
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
        newData: action.data
      };
    case 'RETRIEVE_DATA_SUCCESS':
    case 'SAVE_META_SUCCESS':
      return {
        ...state,
        data: action.data,
        newData: null
      };
    case 'SAVE_META_FAILURE':
      return {
        ...state,
        newData: null
      };
    default:
      return state;
  }
};

export default reducer;
