export function saveDataSuccess(newData) {
  return {
    type: 'SAVE_META_SUCCESS',
    data: newData
  };
}

export function saveDataFailure(error) {
  return {
    type: 'SAVE_META_ERROR',
    error: error
  };
}

export function saveData(newData, src) {
  return dispatch => {
    dispatch({
      type: 'SAVING_META',
      data: newData
    });

    return fetch(src.replace('video.mp4', 'meta.json'), {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(newData)
    })
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(json => {
        console.log('meta saved, received new data', json);
        dispatch(saveDataSuccess(json));
      })
      .catch(error => dispatch(saveDataFailure(error)));
  };
}
