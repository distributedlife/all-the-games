import { getFriendsUrl } from '../endpoints';
import get from 'lodash/get';

export const STORE_FRIENDS_DATA = 'SPIKEY/STORE_FRIENDS_DATA';

export const storeFriendsData = (friendsData) => ({
  type: STORE_FRIENDS_DATA,
  friendsData
})

const fetchFriendsData = (key, steamId) => {
  return fetch(getFriendsUrl(key, steamId))
    .then((response) => response.json())
    .then((responseJson) => get(responseJson, 'friendslist.friends', []))
    .catch((error) => {
      console.error('network error', error);
    });
}

export const getFriendsData = () => (dispatch, getState) => {
  const key = getState().config.key;
  const steamId = getState().config.steamId;

  return fetchFriendsData(key, steamId)
    .then((friendsData) => dispatch(storeFriendsData(friendsData)));
};