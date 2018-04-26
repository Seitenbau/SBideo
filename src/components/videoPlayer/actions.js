const actions = () => ({
  setActiveVideoTime: (state, currentTimestamp, currentTime) => {
    return {
      activeVideo: {
        ...state.activeVideo,
        currentTimestamp,
        currentTime
      }
    };
  }
});

export default actions;
