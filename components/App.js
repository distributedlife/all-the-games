import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import configReducer from '../reducers/config';
import profileReducer from '../reducers/profile';
import friendsReducer from '../reducers/friends';
import gamesReducer from '../reducers/games';

import { seedApp } from '../actions/seed-app';
import { getProfileData } from '../actions/get-profile-data';
import { getFriendsData } from '../actions/get-friends-data';
import { getGamesData } from '../actions/get-games-data';
import { getRecentGamesData } from '../actions/get-recent-games-data';

import Navigation from './MainScreen';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers({
  config: configReducer,
  profile: profileReducer,
  friends: friendsReducer,
  games: gamesReducer,
});
const store = createStoreWithMiddleware(reducer);

export default () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

const key = '';
const steamId = '76561198022232415';

store.dispatch(seedApp(key, steamId));
store.dispatch(getProfileData());
store.dispatch(getFriendsData());
store.dispatch(getGamesData());
store.dispatch(getRecentGamesData());
