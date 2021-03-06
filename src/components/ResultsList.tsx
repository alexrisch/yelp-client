import React, { FC } from 'react';
import { FlatList, ListRenderItem, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Business } from '../data/types';
import { RequestStore } from '../redux';

const resultsSelector = (store: RequestStore) => {
  return store.results?.search?.business || [];
}

const keyExtractor = (item: Business) => JSON.stringify(item.coordinates || {});

const RenderResult: ListRenderItem<Business> = ({item}) => {
  return (
    <View style={{paddingVertical: 8}}>
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
