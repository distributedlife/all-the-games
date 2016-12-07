import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, Image, View, ScrollView } from 'react-native';
import { GameTile } from './GameTile';
import moment from 'moment';
import numeral from 'numeral';
import get from 'lodash/get';

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#fff',
    paddingTop: 16,
    flexDirection: 'column',
    flex: 1,
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

const hours = (minutes) => Math.round(moment.duration(minutes, 'minutes').asHours());
const percent = (p) => numeral(p).format('0%');

export const GamesList = ({games, totalTime, percentagePlayed}) => {
  return (
    <ScrollView style={styles.list}>
      <View style={styles.heading}>
        <Text style={styles.lead}>All Games</Text>
        <Text style={styles.sub}>
          {games.length} games ({percent(percentagePlayed)} played), {hours(totalTime)} hours on record.
        </Text>
      </View>
      { games.map((game) => (<GameTile key={game.appid} game={game} />)) }
    </ScrollView>
  )
};

export const AllGames = connect((state) => ({
  totalTime: get(state, 'games.totalTime', '–'),
  percentagePlayed: get(state, 'games.percentagePlayed', 0),
  games: get(state, 'games.all', []),
}))(GamesList);

export const PlayedGames = connect((state) => ({
  totalTime: get(state, 'games.totalTime', '–'),
  percentagePlayed: get(state, 'games.percentagePlayed', 0),
  games: get(state, 'games.played', []),
}))(GamesList);