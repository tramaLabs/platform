/* eslint-disable import/prefer-default-export */

import { CREATE_INITIATIVE } from '../constants';

function loadInitiative(initiative) {
  return {
    type: CREATE_INITIATIVE,
    payload: {
      initiative,
    },
  };
}

function parseJSON(response) {
  return response.json();
}


export function createInitiative({ name }) {
  return dispatch => {
    fetch('/api/initiatives', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
      }),
    })
    .then(parseJSON)
    .then((initiative) => {
      dispatch(loadInitiative(initiative));
    });
  };
}
