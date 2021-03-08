import React, { Component, FC, ReactElement, ReactNode, useEffect, useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

interface YelpTextInputProps {
  placeholderOptions: string[];
  onTextChanged: (text: string) => void;
  text: string;
  onBlur?: () => void;
  onFocus?: () => void;
  rightElement?: () => ReactNode;
  disabled?: boolean;
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 40,
    alignItems: 'center'
  },
  input: {
    flex: 1
  }
});

export const YelpTextInput: FC<YelpTextInputProps> = props => {
  const {
    placeholderOptions,
    onTextChanged,
    text,
    rightElement,
    onBlur,
    onFocus,
    disabled
  } = props;
  const [placeholderIndex, placeholderIndexSet] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      placeholderIndexSet(placeholderIndex === placeholderOptions.length - 1 ? 0 : placeholderIndex + 1);
    }, 2000);

    return () => clearTimeout(timer);
  }, [placeholderIndex]);

  return (
    <View style={styles.container}>
      <TextInput
        onBlur={onBlur}
        placeholder={placeholderOptions[placeholderIndex]}
        value={text}
        onChangeText={onTextChanged}
        style={styles.input}
        onFocus={onFocus}
        editable={!disabled}
      />
      {!!rightElement && rightElement()}
    </View>
  );
};
