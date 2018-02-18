const initialState = {
  activeVideo: {
    src: null,
    meta: {}
  },
  data: []
};

const reducer = (state = initialState, action) => {
  console.log('reducer', action);
  switch (action.type) {
    case 'SET_ACTIVE_VIDEO':
      return {
        ...state,
        activeVideo: {
          ...state.activeVideo,
          ...action.activeVideo
        }
      };
    case 'RETRIEVE_DATA_SUCCESS':
      return {
        ...state,
        data: [...state.data, ...action.data]
      };
    case 'SAVE_META_SUCCESS':
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
};

export default reducer;
