import React, { useState, useCallback } from 'react';
import { FlatList, View } from 'react-native';
import TypingText from './TypingText';
import RodaPe from './RodaPe';
import { lista } from '../../Lista'; 
import styles from '../styles';
import keyExtractor from './Elements.flatlist/keyExtractor';
import getItemLayout from './Elements.flatlist/getItemLayout';
import renderItemSeparator from './Elements.flatlist/renderItemSeparator';
import Item from './Items';

export default function HomeScreen() { 

  const handleListReady = () => {
    setListLoaded(true);
  };

  const renderItem = useCallback(({ item }) => (
    <View key={item.key}>
      <Item linkId={item.linkId} />
    </View>
  ), []);

  return (
    <View style={{ transition: 'opacity 2s' }}> 
      <FlatList
        ListHeaderComponent={<TypingText /> }
        ListFooterComponent={<RodaPe />}
        ListFooterComponentStyle={styles.rodaPe}
        ListHeaderComponentStyle={styles.Typi}
        style={styles.flat}
        maxToRenderPerBatch={7}
        removeClippedSubviews={true}
        initialNumToRender={5}
        data={lista}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        getItemLayout={getItemLayout}
        ItemSeparatorComponent={renderItemSeparator} 
        /> 
    </View>
  );
}
