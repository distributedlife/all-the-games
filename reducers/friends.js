import { STORE_FRIENDS_DATA } from '../actions/get-friends-data';

export default (state = {}, action) => {
  switch (action.type) {
    case STORE_FRIENDS_DATA: {
      return action.friendsData
    }
    default:
      return state;
  }
}