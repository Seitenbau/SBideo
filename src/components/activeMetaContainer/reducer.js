const reducer = (state = [], action) => {
  switch (action.type) {
    case 'SAVE_META':
      return {
        ...state,
        ...action.meta
      };
    default:
      return state;
  }
};

export default reducer;
