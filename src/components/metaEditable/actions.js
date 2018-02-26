import crawl from 'tree-crawl';

const actions = () => ({
  handleSave: (state, newMeta, src) => {
    // we're optimistic, so update client state
    setNewMetaInTree(state.data, newMeta); // TODO: check why is this enough

    // send POST request to server
    fetch(src.replace('video.mp4', 'meta.json'), {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(newMeta)
    }).then(response => {
      if (!response.ok) {
        alert(`Error while saving: ${response.statusText} ${response.url}`);
        // TODO revert client state
      }
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
