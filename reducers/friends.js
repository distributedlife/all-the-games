import { ADD_FRIEND } from '../actions/get-friends-data';

const byLastLogoff = (a, b) => (a.lastlogoff - b.lastlogoff);
const alphabetically = (a, b) => {
  const nameA = a.toUpperCase();
  const nameB = b.toUpperCase();

  return (nameA < nameB) ? 1 : (nameA > nameB) ? -1 : 0;
}
const byOnline = (a, b) => {
  if (a.gameextrainfo && b.gameextrainfo) {
    return alphabetically(a.displayName, b.displayName);
  } else if (a.gameextrainfo) {
    return 1;
  } else if (b.gameextrainfo) {
    return -1;
  }

  return byLastLogoff(a,b);
};

export default (state = [], action) => {
  switch (action.type) {
    case ADD_FRIEND: {
      const displayName = action.friendData.realname || action.friendData.personaname;
      const friend = {
        ...action.friendData,
        displayName
      }

      return state.concat(friend).sort(byOnline).reverse();
    }
    default:
      return state;
  }
}
