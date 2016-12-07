import { SEED_APP } from '../actions/seed-app';

export default (state = {}, action) => {
  switch (action.type) {
    case SEED_APP: {
      return { ...state, key: action.key, steamId: action.steamId }
    }
    default:
      return state;
  }
}