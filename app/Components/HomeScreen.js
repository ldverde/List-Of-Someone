import TypingText from './TypingText';
import RodaPe from './RodaPe';
import React, {useCallback} from 'react';
import { FlatList, View } from 'react-native';
import { lista } from '../../Lista'; 
import styles from '../styles';
import keyExtractor from './Elements.flatlist/keyExtractor';
import getItemLayout from './Elements.flatlist/getItemLayout';
import renderItemSeparator from './Elements.flatlist/renderItemSeparator';
import Item from './Items'

export default function HomeScreen() {
  
  const renderItem = useCallback(({item}) => (
    <View key={item.key}>
      <Item linkId={item.linkId} /> 
    </View>
   ), [])

    return (
      <View> 
        <FlatList
          ListHeaderComponent={<TypingText/>}
          ListFooterComponent={<RodaPe/>}
          ListHeaderComponentStyle={styles.Typi}
          ListFooterComponentStyle={styles.rodaPe}
          style={styles.flat}
          maxToRenderPerBatch={15}
          removeClippedSubviews={true} 
          initialNumToRender={5}
          windowSize={11}
          data={lista}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          getItemLayout={getItemLayout}
          ItemSeparatorComponent={renderItemSeparator}
        />
      </View>
    );
  }