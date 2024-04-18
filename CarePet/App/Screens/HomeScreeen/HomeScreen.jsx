import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';
import Slider from './Slider';
import Categories from './Categories';
import BusinessList from './BusinessList';
import HomeNavigation from '../../Navigations/HomeNavigation'; // Import your navigation component

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <View style={styles.contentContainer}>
        {/* Slider */}
        <Slider />

        {/* Categories */}
        <Categories />

        {/* BusinessList */}
        <BusinessList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
});
