import crawl from 'tree-crawl';

const actions = () => ({
  handleSave: (state, newMeta, src) => {
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

    // we're optimistic, so update client state
    const newData = setNewMetaInTree(
      JSON.parse(JSON.stringify(state.data)),
      newMeta
    );
    return {
      data: newData
    };
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
