import { getGamesListUrl } from '../endpoints';
import get from 'lodash/get';

export const STORE_GAMES_DATA = 'SPIKEY/STORE_GAMES_DATA';

export const storeGamesData = (allGamesData) => ({
  type: STORE_GAMES_DATA,
  allGamesData
})

const fetchGamesData = (key, steamId) => {
  return fetch(getGamesListUrl(key, steamId))
    .then((response) => response.json())
    .then((responseJson) => get(responseJson, 'response.games', []))
    .catch((error) => {
      console.error('network error', error);
    });
}

export const getGamesData = () => (dispatch, getState) => {
  const key = getState().config.key;
  const steamId = getState().config.steamId;

  return fetchGamesData(key, steamId)
    .then((allGamesData) => dispatch(storeGamesData(allGamesData)));
};