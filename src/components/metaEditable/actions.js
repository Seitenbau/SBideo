import crawl from 'tree-crawl';

const actions = ({ setState }) => ({
  /**
   * Loads the latest meta from server; update client state if it isn't up to date
   */
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
          // something was changed, so update client state to match server
          setState({
            data: setNewMetaInTree(
              JSON.parse(JSON.stringify(state.data)),
              serverMeta
            )
          });

          alert(
            'Someone edited this video as well. We just synced the data, please continue editing.'
          );
        }
      })
      .catch(e => console.log(e));
  },

  handleSave: (state, newMeta, src) => {
    // keep old meta for the case we need to revert
    const oldMeta = JSON.stringify(state.activeVideo.meta);

    // we're optimistic, so update client state immediately
    setState({
      data: setNewMetaInTree(JSON.parse(JSON.stringify(state.data)), newMeta)
    });

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
        // revert client state to old meta
        setState({
          data: setNewMetaInTree(
            JSON.parse(JSON.stringify(state.data)),
            JSON.parse(oldMeta)
          )
        });
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
