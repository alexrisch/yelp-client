import React, { Component, FC, ReactElement, ReactNode, useEffect, useState } from 'react';
import { View, TextInput } from 'react-native';

interface YelpTextInputProps {
  placeholderOptions: string[];
  onTextChanged: (text: string) => void;
  text: string;
  onBlur?: () => void;
  onFocus?: () => void;
  rightElement?: () => ReactNode;
}

export const YelpTextInput: FC<YelpTextInputProps> = props => {
  const {
    placeholderOptions,
    onTextChanged,
    text,
    rightElement,
    onBlur,
    onFocus
  } = props;
  const [placeholderIndex, placeholderIndexSet] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      placeholderIndexSet(placeholderIndex === placeholderOptions.length - 1 ? 0 : placeholderIndex + 1);
    }, 2000);

    return () => clearTimeout(timer);
  }, [placeholderIndex]);

  return (
    <View style={{
      width: '100%',
      borderBottomColor: 'grey',
      borderBottomWidth: 1,
      flexDirection: 'row',
      height: 40,
      alignItems: 'center'
    }}>
      <TextInput
        onBlur={onBlur}
        placeholder={placeholderOptions[placeholderIndex]}
        value={text}
        onChangeText={onTextChanged}
        style={{flex: 1}}
        onFocus={onFocus}
      />
      {!!rightElement && rightElement()}
    </View>
  );
};
