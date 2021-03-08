import React, { createRef, FC } from 'react';
import { useSelector } from 'react-redux';
import MapView, { Marker, Region } from 'react-native-maps';
import { RequestStore } from '../redux';
import { StyleSheet, View } from 'react-native';
import { Business } from '../data/types';

const resultsSelector = (store: RequestStore) => {
  return store.results?.search?.business || [];
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

const keyExtractor = (business: Business) => {
  return business.name + business.coordinates?.latitude + business.coordinates?.longitude
}

export const ResultsMap: FC = () => {
  const results = useSelector(resultsSelector);
  const region: Region = {
    longitude: results?.[0]?.coordinates.longitude || 0,
    latitude: results?.[0]?.coordinates.latitude || 0,
    longitudeDelta: results?.[0]?.coordinates.latitude ? 0.2 : 50,
    latitudeDelta: results?.[0]?.coordinates.latitude ? 0.2 : 50
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.container}
        region={region}
      >
        {results.map(res => (
          <Marker
            key={keyExtractor(res)}
            coordinate={res.coordinates}
            title={res.name}
          />
        ))}
      </MapView>
    </View>
  );
};
