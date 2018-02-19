import crawl from 'tree-crawl';

export function saveDataSuccess(data) {
  return {
    type: 'SAVE_META_SUCCESS',
    data: data
  };
}

export function saveDataFailure(error) {
  return {
    type: 'SAVE_META_ERROR',
    error: error
  };
}

const setNewMeta = (tree, newMeta) => {
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

export function saveData(newMeta, src) {
  return (dispatch, getState) => {
    const newData = setNewMeta({ items: getState().home.data }, newMeta);
    dispatch({
      type: 'SAVING_META',
      data: newData.items
    });

    return fetch(src.replace('video.mp4', 'meta.json'), {
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
        return response.json();
      })
      .then(json => {
        console.log('meta saved, received new data', json);
        setTimeout(() => {
          dispatch(saveDataSuccess(json));
        }, 3000);
      })
      .catch(error => dispatch(saveDataFailure(error)));
  };
}
