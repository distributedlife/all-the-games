import React, { Component } from 'react';
import { connect } from 'react-redux';
import get from 'lodash/get';
import { StyleSheet, Text, Image, View, ScrollView } from 'react-native';
import { RecentPlayedGameTile } from './RecentPlayedGameTile';
import { Friend } from './Profile';
import moment from 'moment';

const styles = StyleSheet.create({
  list: {
    paddingBottom: 16,
    backgroundColor: '#fff',
    flexDirection: 'column',
    flex: -1,
  },
  heading: {
    paddingBottom: 16,
  },
  lead: {
    fontWeight: 'bold',
    fontSize: 24,
    paddingLeft: 8,
    textAlign: 'left',
  },
  sub: {
    fontSize: 10,
    fontStyle: 'italic',
    paddingLeft: 8,
    paddingTop: 4,
    color: '#999'
  },
  item: {
  }
});

export const Friends = ({friends}) => (
  <View style={styles.list}>
    <View style={styles.heading}>
      <Text style={styles.lead}>Friends</Text>
    </View>
    <ScrollView>
      {
        friends && friends.map((friend) => (<Friend key={friend.steamid} friend={friend} />))
      }
    </ScrollView>
  </View>
);

export default connect((state) => {
  return {
    friends: get(state, 'friends', [])
  }
})(Friends);
