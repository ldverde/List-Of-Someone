import TypingText from './TypingText';
import RodaPe from './RodaPe';
import { FlatList, View } from 'react-native';
import { lista } from '../../Lista';
import renderItem from '../Elements.flatlist/renderItem';
import styles from '../styles';
import keyExtractor from '../Elements.flatlist/keyExtractor';
import getItemLayout from '../Elements.flatlist/getItemLayout';
import renderItemSeparator from '../Elements.flatlist/renderItemSeparator';

export default function HomeScreen() {
    return (
      <View> 
        <FlatList
          ListHeaderComponent={<TypingText/>}
          ListFooterComponent={<RodaPe/>}
          ListHeaderComponentStyle={styles.Typi}
          ListFooterComponentStyle={styles.rodaPe}
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