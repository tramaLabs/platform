import { CREATE_INITIATIVE } from '../constants';

export default function initiative(state = {}, action) {
  switch (action.type) {
    case CREATE_INITIATIVE:
      return {
        ...state,
        ...action.payload.initiative,
      };
    default:
      return state;
  }
}
