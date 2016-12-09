import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, Image, View } from 'react-native';
import moment from 'moment';
import get from 'lodash/get';

const summaryItemStyles = StyleSheet.create({
  container: {
    flex: -1,
    paddingLeft: 8,
    paddingRight: 8,
  },
  name: {
    fontSize: 10,
    fontStyle: 'italic',
    paddingTop: 4,
    color: '#999',
    textAlign: 'center',
  },
  value: {
    fontSize: 13,
    fontWeight: 'bold',
    paddingTop: 2,
    color: '#111',
    textAlign: 'center',
  }
});

const SummaryItem = ({name, value}) => (
  <View style={summaryItemStyles.container}>
    <Text style={summaryItemStyles.name}>{name}</Text>
    <Text style={summaryItemStyles.value}>{value}</Text>
  </View>
);

const bioStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 16
  },
  realname: {
    fontSize: 13,
    fontWeight: 'bold',
    paddingTop: 2,
    color: '#111'
  },
  id: {
    fontSize: 10,
    fontStyle: 'italic',
    paddingTop: 4,
    color: '#999'
  },
  ingame: {
    fontSize: 10,
    fontStyle: 'italic',
    paddingTop: 4,
    color: '#8b3778'
  }
})

const BioItem = ({name, lastOnline, inGame}) => (
  <View style={bioStyles.container}>
    <Text style={bioStyles.realname}>{name}</Text>
    { !inGame && <Text style={bioStyles.id}>Online {lastOnline}</Text> }
    { inGame && <Text style={bioStyles.ingame}>Playing {inGame}</Text> }
  </View>
)

const profileStyles = StyleSheet.create({
  container: {
    flex: -1,
    padding: 16,
    flexDirection: 'row',
    backgroundColor: '#fff'
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
  },
});

export const Friend = ({friend}) => {
  const avatarSource = {
    uri: friend.avatarmedium
  }

  const timeSince = moment(friend.lastlogoff, 'X').from(moment().utc())

  return (
    <View style={profileStyles.container}>
      <Image source={avatarSource} style={profileStyles.avatar} resizeMode='contain'/>
      <BioItem name={friend.displayName}
               lastOnline={timeSince}
               inGame={friend.gameextrainfo}
      />
    </View>
  );
}

export const Profile = ({avatar, gamesCount, friendsCount}) => {
  const avatarSource = {
    uri: avatar.avatarmedium
  }

  const timeSince = moment(avatar.lastlogoff, 'X').from(moment().utc())

  return (
    <View style={profileStyles.container}>
      <Image source={avatarSource} style={profileStyles.avatar} resizeMode='contain'/>
      <BioItem name={avatar.displayName}
               lastOnline={timeSince}
               inGame={avatar.gameextrainfo}
      />
      <SummaryItem name="Games" value={gamesCount} />
      <SummaryItem name="Friends" value={friendsCount} />
    </View>
  );
}

export default connect((state) => ({
  avatar: state.profile,
  gamesCount: get(state, 'games.all.length', '–'),
  friendsCount: get(state, 'friends.length', '–'),
}))(Profile)
