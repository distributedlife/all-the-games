import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import moment from 'moment';

const gameImageUrl = (appId, hash) => `http://media.steampowered.com/steamcommunity/public/images/apps/${appId}/${hash}.jpg`;

const logoForGame = (game) => ({
  uri: gameImageUrl(game.appid, game.img_logo_url)
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: -1,
    padding: 8,
  },
  image: {
    backgroundColor: '#000',
    width: 92,
    height: 34.5,
    marginRight: 8,
  },
  text: {
    flexDirection: 'column',
  },
  name: {
    fontSize: 13,
    fontWeight: 'bold',
    paddingTop: 2,
    color: '#111'
  },
  time: {
    fontSize: 10,
    fontStyle: 'italic',
    paddingTop: 4,
    color: '#999'
  },
});

const humanise = (minutes) => moment.duration(minutes, 'minutes').humanize();

export const RecentPlayedGameTile = ({game}) => (
  <View style={styles.container}>
    <Image source={logoForGame(game)} style={styles.image} resizeMode="contain" />
    <View style={styles.text}>
      <Text style={styles.name}>{game.name}</Text>
      <Text style={styles.time}>
        {humanise(game.playtime_2weeks)} played in the last two weeks.
      </Text>
    </View>
  </View>
);
