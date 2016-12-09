import { getPlayerSummaryUrl } from './endpoints';

export const STORE_PROFILE_DATA = 'SPIKEY/STORE_PROFILE_DATA';

export const storeProfileData = (profileData) => ({
  type: STORE_PROFILE_DATA,
  profileData
})

export const fetchProfileData = (key, steamId) => {
  return fetch(getPlayerSummaryUrl(key, steamId), { method: 'GET', json: true })
    .then((response) => response.json())
    .then((responseJson) => responseJson.response.players[0] || {})
    .catch((error) => {
      console.error('network error', error);
    });
}

export const getProfileData = () => (dispatch, getState) => {
  const key = getState().config.key;
  const steamId = getState().config.steamId;

  return fetchProfileData(key, steamId)
    .then((profileData) => dispatch(storeProfileData(profileData)));
};
