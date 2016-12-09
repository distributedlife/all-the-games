import { getFriendsUrl } from './endpoints';
import { fetchProfileData } from './get-profile-data';
import get from 'lodash/get';

export const ADD_FRIEND = 'SPIKEY/ADD_FRIEND';

export const storeFriendsData = (friendData) => ({
  type: ADD_FRIEND,
  friendData
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
    .then((friends) => friends.map((friend) => fetchProfileData(key, friend.steamid)))
    .then((promises) => {
      promises.forEach((promise) => {
        promise.then((friendData) => dispatch(storeFriendsData(friendData)))
      })
    });
};
