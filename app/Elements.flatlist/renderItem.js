import React, { useCallback } from 'react';
import { View } from 'react-native';
import Item from '../Components/Items';

const renderItem = useCallback(({item}) => (
    <View key={item.key}>
      <Item linkId={item.linkId} /> 
    </View>
   ), [])
   
export default renderItem