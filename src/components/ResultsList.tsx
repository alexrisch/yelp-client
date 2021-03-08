import React, { FC } from 'react';
import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Business } from '../data/types';
import { RequestStore } from '../redux';

const resultsSelector = (store: RequestStore) => {
  return store.results?.search?.business || [];
}

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 8
  }
})

const keyExtractor = (business: Business) => {
  return business.name + business.coordinates?.latitude + business.coordinates?.longitude
}
const RenderResult: ListRenderItem<Business> = ({item}) => {
  return (
    <View style={styles.itemContainer}>
      <Text>
        {item.name}
      </Text>
    </View>
  );
};

export const ResultsList: FC = () => {
  const results = useSelector(resultsSelector);
  return (
    <FlatList
      data={results}
      renderItem={RenderResult}
      keyExtractor={keyExtractor}
    />
  );
};
