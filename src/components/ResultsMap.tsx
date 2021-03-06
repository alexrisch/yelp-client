import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import MapView, { Marker, Region } from 'react-native-maps';
import { RequestStore } from '../redux';
import { StyleSheet, View } from 'react-native';

const resultsSelector = (store: RequestStore) => {
  return store.results?.search?.business || [];
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export const ResultsMap: FC = () => {
  const results = useSelector(resultsSelector);
  const initialRegion: Region = {
    longitude: results?.[0]?.coordinates.longitude || 0,
    latitude: results?.[0]?.coordinates.latitude || 0,
    longitudeDelta: results?.[0]?.coordinates.latitude ? 1 : 50,
    latitudeDelta: results?.[0]?.coordinates.latitude ? 1 : 50
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.container}
        initialRegion={initialRegion}
      >
        {results.map(res => (
          <Marker
            key={JSON.stringify(res.coordinates)}
            coordinate={res.coordinates}
            title={res.name}
          />
        ))}
      </MapView>
    </View>
  );
};
