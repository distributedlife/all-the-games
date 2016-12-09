import React from "react";
import { StyleSheet, Text, Image, View } from 'react-native';
import Profile from './Profile';
import RecentActivity from './RecentActivity';
import Friends from './Friends';
import { AllGames, PlayedGames } from './AllGames';
import TabBar from 'react-native-xtabbar'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 20,
    backgroundColor: '#fff'
  },
});

const News = () => (
  <View style={styles.container}>
    <Profile />
    <RecentActivity />
  </View>
);

const Games = () => (
  <View style={styles.container}>
    <AllGames />
  </View>
)

const FriendsScreen = () => (
  <View style={styles.container}>
    <Friends />
  </View>
)

export default () => (
  <TabBar>
    <TabBar.Item title="Latest">
      <News />
    </TabBar.Item>
    <TabBar.Item title="Friends">
      <FriendsScreen />
    </TabBar.Item>
    <TabBar.Item title="All (A-Z)">
      <AllGames />
    </TabBar.Item>
    <TabBar.Item title="Played">
      <PlayedGames />
    </TabBar.Item>
  </TabBar>
);
