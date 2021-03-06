import React, { FC, ReactNode, useEffect, useState } from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {getCurrentPositionAsync, LocationObject, requestPermissionsAsync} from 'expo-location';
import { YelpTextInput } from './YelpTextInput';
import { useDispatch } from 'react-redux';
import { Actions } from '../redux/actions';

const placeholders = [
  'Address',
  'City',
  'Zip'
];

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row'
  }
});

const MY_LOCATION = 'Current Location';

export const LocationBar: FC = () => {
  const dispatch = useDispatch();
  const [userLocation, userLocationSet] = useState<LocationObject | undefined>();
  const [useCurrent, useCurrentSet] = useState(false);
  const [manualLocation, manualLocationSet] = useState('');

  const requestPermissions = async () => {
    let { status } = await requestPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission to access location was denied');
      useCurrentSet(false);
      return;
    }

    let location = await getCurrentPositionAsync({});
    userLocationSet(location);
    useCurrentSet(true);
  };

  useEffect(() => {
    requestPermissions()
    .catch(e => console.warn(e));
  }, []);

  useEffect(() => {
    updateRequest();
  }, [useCurrent])

  const handleTextChange = (text: string) => {
    manualLocationSet(text);
  };

  const handleLocationTap = () => {
    if (!useCurrent) {
      useCurrentSet(true);
      requestPermissions();
    } else {
      useCurrentSet(false);
    }
  };


  const updateRequest = () => {
    const locationAction: Actions = {
      type: 'SET_LOCATION',
      payload: useCurrent ? {
        latitude: userLocation?.coords.latitude || 0,
        longitude: userLocation?.coords.longitude || 0
      } : manualLocation
    };
    dispatch(locationAction)
  };

  const handleFocus = () => {
    useCurrentSet(false);
  };

  const renderRight = (): ReactNode => (
    <TouchableOpacity onPress={handleLocationTap}>
      <Text>
        {useCurrent ? 'Using My Location' : 'Use My Location'}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <YelpTextInput
        placeholderOptions={placeholders}
        text={useCurrent ? MY_LOCATION : manualLocation}
        onTextChanged={handleTextChange}
        onBlur={updateRequest}
        rightElement={renderRight}
        onFocus={handleFocus}
      />
    </View>
  );
};
