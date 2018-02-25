const actions = ({ setState }) => ({
  retrieveData: () => {
    setState({ loading: true });

    return fetch(process.env.API_URL)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(data => ({ data, loading: false }))
      .catch(error => ({ error, loading: false }));
  },

  setActiveVideo: (state, video) => ({
    activeVideo: video
  }),

  announceEditMode: (state, editing) => ({
    editMode: editing
  })
});

export default actions;
