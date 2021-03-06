import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Actions } from '../redux/actions';
import { YelpTextInput } from './YelpTextInput';

const placeholders = [
  'Pizza',
  'Burritos',
  'Dessert'
];

export const SearchBar: FC = () => {
  const dispatch = useDispatch();
  const [query, querySet] = useState('');
  
  const handleQueryChange = (text: string) => {
    querySet(text);
  };


  const updateRequest = () => {
    const action: Actions = {
      type: 'SET_QUERY',
      payload: query
    }
    dispatch(action)
  };


  return (
    <YelpTextInput
      text={query}
      onTextChanged={handleQueryChange}
      placeholderOptions={placeholders}
      onBlur={updateRequest}
    />
  );
};
