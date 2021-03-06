import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { Categories } from './src/components/Categories';
import { LocationBar } from './src/components/LocationBar';
import { Results } from './src/components/Results';
import { SearchBar } from './src/components/SearchBar';
import { store } from './src/redux';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <SearchBar />
        <LocationBar />
        <Categories />
        <Results />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 80,
    marginHorizontal: 20
  },
});
