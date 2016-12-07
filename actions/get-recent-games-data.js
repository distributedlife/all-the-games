import { getRecentGamesUrl } from '../endpoints';
import get from 'lodash/get';

export const STORE_RECENT_GAMES_DATA = 'SPIKEY/STORE_RECENT_GAMES_DATA';

export const storeRecentGamesData = (recentGames) => ({
  type: STORE_RECENT_GAMES_DATA,
  recentGames
})

const fetchRecentGames = (key, steamId) => {
  return fetch(getRecentGamesUrl(key, steamId))
    .then((response) => response.json())
    .then((responseJson) => get(responseJson, 'response', []))
    .catch((error) => {
      console.error('network error', error);
    });
}

export const getRecentGamesData = () => (dispatch, getState) => {
  const key = getState().config.key;
  const steamId = getState().config.steamId;

  return fetchRecentGames(key, steamId)
    .then((recentGames) => dispatch(storeRecentGamesData(recentGames)));
};