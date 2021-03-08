import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { RequestStore } from '../redux';
import { makeRequest } from '../data/request';
import { ResultsList } from './ResultsList';
import { ResultsMap } from './ResultsMap';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row', width: '100%', justifyContent: 'space-evenly'
  },
  container: {
    flex: 1
  },
  errorText: {
    color: 'red'
  }
});

const querySelector = (store: RequestStore) => store.query;
const locationSelector = (store: RequestStore) =>{
  return store.location;
};
const errorSelector = (store: RequestStore) => store.error;
const loadingSelector = (store: RequestStore) => store.loading;
const categorySelector = (store: RequestStore) => {
  return store.category?.alias;
}
export const Results: FC = () => {
  const dispatch = useDispatch();
  const query = useSelector(querySelector);
  const location = useSelector(locationSelector);
  const error = useSelector(errorSelector);
  const loading = useSelector(loadingSelector);
  const category = useSelector(categorySelector);

  const [tab, tabSet] = useState(0);

  useEffect(() => {
    if (query && location) {
      makeRequest(dispatch, {
        query: query || '',
        category,
        location
      });
    }
  }, [query, location, category]);

  const setTab = (index: number) => () => {
    tabSet(index);
  };

  return (
    <View style={styles.container}>
      {!!error && <Text style={styles.errorText}>
        {error}
      </Text>}
      {loading && <ActivityIndicator />}
      <View style={styles.row}>
        <TouchableOpacity onPress={setTab(0)}>
          <View>
            <Text>
              List
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={setTab(1)}>
          <View>
            <Text>
              Map
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      {tab === 0 ? (
        <ResultsList />
      ) : (
        <ResultsMap />
      )}
    </View>
  );
};
