import { STORE_PROFILE_DATA } from '../actions/get-profile-data';

export default (state = {}, action) => {
  switch (action.type) {
    case STORE_PROFILE_DATA: {
      const displayName = action.profileData.realname || action.profileData.personaname;

      return { ...state, ...action.profileData, displayName }
    }
    default:
      return state;
  }
}