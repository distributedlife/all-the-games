import { STORE_PROFILE_DATA } from '../actions/get-profile-data';

export default (state = {}, action) => {
  switch (action.type) {
    case STORE_PROFILE_DATA: {
      return { ...state, ...action.profileData }
    }
    default:
      return state;
  }
}