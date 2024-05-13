import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from './Header';
import Slider from './Slider';
import Categories from './Categories';
import BusinessList from './BusinessList';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.contentContainer}>
          {/* Slider */}
          <Slider />

          {/* Categories */}
          <Categories />

          {/* BusinessList */}
          <BusinessList />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  contentContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});
