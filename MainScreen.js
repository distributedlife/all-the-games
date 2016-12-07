import React from "react";
import { StyleSheet, Text, Image, View } from 'react-native';
import Profile from './Profile';
import RecentActivity from './RecentActivity';
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

const Friends = () => (
  <View style={styles.container}>
  </View>
)

export default () => (
  <TabBar>
    <TabBar.Item title="All (A-Z)">
      <AllGames />
    </TabBar.Item>
    <TabBar.Item title="Played">
      <PlayedGames />
    </TabBar.Item>
    <TabBar.Item title="Latest">
      <News />
    </TabBar.Item>
    <TabBar.Item title="Friends">
      <Friends />
    </TabBar.Item>
  </TabBar>
);
