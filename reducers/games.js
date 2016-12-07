import clone from 'lodash/clone';

import { STORE_GAMES_DATA } from '../actions/get-games-data';
import { STORE_RECENT_GAMES_DATA } from '../actions/get-recent-games-data';

const byPlaytime = (a, b) => (a.playtime_forever - b.playtime_forever);
const alphabetically = (a, b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
}

export default (state = {}, action) => {
  switch (action.type) {
    case STORE_RECENT_GAMES_DATA: {
      return { ...state, recent: action.recentGames.games }
    }
    case STORE_GAMES_DATA: {
      const all = clone(action.allGamesData).sort(alphabetically);
      const gamesByPlaytime = clone(action.allGamesData).sort(byPlaytime).reverse()
      const played = gamesByPlaytime.filter((game) => game.playtime_forever > 0)
      const totalTime = played.reduce((t, game) => t += game.playtime_forever, 0)
      const percentagePlayed = played.length / all.length

      return { ...state, all, totalTime, played, percentagePlayed }
    }
    default:
      return state;
  }
}