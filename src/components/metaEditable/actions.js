import crawl from 'tree-crawl';

const actions = ({ setState }) => ({
  getLatestMeta: state => {
    const src = state.activeVideo.src;
    const clientMeta = state.activeVideo.meta;

    fetch(src.replace('video.mp4', 'meta.json'), { cache: 'no-cache' })
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(serverMeta => {
        const isEqual =
          JSON.stringify({
            title: clientMeta.title,
            description: clientMeta.description,
            tags: clientMeta.tags,
            people: clientMeta.people
          }) ===
          JSON.stringify({
            title: serverMeta.title,
            description: serverMeta.description,
            tags: serverMeta.tags,
            people: serverMeta.people
          });

        if (!isEqual) {
          const newData = setNewMetaInTree(
            JSON.parse(JSON.stringify(state.data)),
            serverMeta
          );
          setState({ data: newData });
          // TODO force rerendering of form

          alert(
            'Someone edited this video as well; data synced, now its save to continue editing.'
          );
        }
      })
      .catch(e => console.log(e));
  },

  handleSave: (state, newMeta, src) => {
    // keep old state for the case we need to revert
    const oldData = JSON.stringify(state.data);

    // we're optimistic, so update client state immediately
    const newData = setNewMetaInTree(
      JSON.parse(JSON.stringify(state.data)),
      newMeta
    );
    setState({ data: newData });

    // send POST request to server
    fetch(src.replace('video.mp4', 'meta.json'), {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(newMeta)
    })
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .catch(error => {
        alert(`Error while saving: ${error.message}`);
        // revert client state
        // TODO don't revert complete state, could have changed in the meantime if request is slow
        setState({ data: JSON.parse(oldData) });
      });
  }
});

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

export default actions;
