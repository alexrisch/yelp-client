import React, { createRef, FC, useEffect, useMemo, useState } from 'react';
import { FlatList, ListRenderItem, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { L1Categories, Category, categories } from '../lib/categories';
import { RequestStore } from '../redux';
import { Actions } from '../redux/actions';
import { YelpTextInput } from './YelpTextInput';

const styles = StyleSheet.create({
  item: {
    padding: 10,
  },
  selectedItem: {
    padding: 10,
    borderRadius: 35,
    backgroundColor: 'cyan'
  },
  container: {
    height: 40
  },
  optionsContainer: {
    height: 120
  }
})

const placeholderOptions = L1Categories.map(cat => cat.title);
const selectedCategorySelector = (store: RequestStore) => store.category;

const keyExtractor = (item: Category) => item.alias;

export const Categories: FC = () => {
  const dispatch = useDispatch();
  const [showOptions, showOptionsSet] = useState(false);
  const [filter, filterSet] = useState('');
  const selectedCatgory = useSelector(selectedCategorySelector);

  const onFocus = () => {
    showOptionsSet(true);
  }

  const renderItem: ListRenderItem<Category> = ({item}) => {
    const isSelected = item.alias === selectedCatgory?.alias;

    const onSelect = () => {
      if (isSelected) {
        const action: Actions = {
          type: 'SET_CATEGORY',
          payload: undefined
        };
        dispatch(action);
      } else {
        filterSet(item.title);
        showOptionsSet(false);
        const action: Actions = {
          type: 'SET_CATEGORY',
          payload: item
        };
        dispatch(action);
      }
    }

    return (
      <TouchableOpacity onPress={onSelect}>
        <View style={isSelected ? styles.selectedItem : styles.item}>
          <Text>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const filterChanged = (text: string) => {
    if (!text) {
      showOptionsSet(false);
    }
    filterSet(text);
  };

  const data = useMemo(() => {
    if (!filter) {
      return L1Categories;
    }
    return categories.filter(cat => cat.title.includes(filter));
  }, [filter])


  return (
    <View style={showOptions ? styles.optionsContainer : styles.container}>
      <YelpTextInput
        placeholderOptions={placeholderOptions}
        onFocus={onFocus}
        text={filter}
        onTextChanged={filterChanged}
      />
      {showOptions && <FlatList
        data={data}
        renderItem={renderItem}
        horizontal
        keyExtractor={keyExtractor}
      />}
    </View>
  );
};
