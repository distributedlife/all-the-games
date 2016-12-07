import React, { Component } from 'react';
import { connect } from 'react-redux';
import get from 'lodash/get';
import { StyleSheet, Text, Image, View, ScrollView } from 'react-native';
import { RecentPlayedGameTile } from './RecentPlayedGameTile';
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

const humanise = (minutes) => moment.duration(minutes, 'minutes').humanize();

export const RecentActivity = ({recentGames}) => {
  const totalTime = recentGames.reduce((t, game) => t += game.playtime_2weeks, 0)
  return (
    <View style={styles.list}>
      <View style={styles.heading}>
        <Text style={styles.lead}>Recent Activity</Text>
        <Text style={styles.sub}>{humanise(totalTime)} played in last two weeks</Text>
      </View>
      <ScrollView>
        {
          recentGames.map((game) => (
            <RecentPlayedGameTile key={game.appid} game={game} />
          ))
        }
      </ScrollView>
    </View>
  )
};

export default connect((state) => ({
  recentGames: get(state, 'games.recent', [])
}))(RecentActivity);