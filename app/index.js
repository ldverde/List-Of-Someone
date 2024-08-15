import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Image, Alert, Linking, FlatList, Text, View, Pressable, ScrollView } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { lista } from '../Lista';
import React, { Component, useState , useCallback , useEffect } from 'react';
import TypeWriter from 'react-native-typewriter';
import { Shadow } from 'react-native-shadow-2';
import styles from './styles';
class TypingText extends Component {
  render() {
    return <View>
      <TypeWriter style={styles.titulo} initialDelay={1000} typing={1} minDelay={20} maxDelay={60}> Seja Bem Vinda a sua lista de vídeos, os quais foram recomendados por... você deve saber quem.</TypeWriter>
      <TypeWriter style={styles.titulo} initialDelay={10000} typing={1} minDelay={20} maxDelay={60}> {"\n"}{"\n"} Bem, os vídeos estão logo abaixo, basta clicar:</TypeWriter>
    </View>
  }
}

function Item({ linkId }) {
  const [detalhes, setDetalhes] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&key=AIzaSyC6HIfXaIcu6EEI9NRwWMeLSxyKdIm7_rE&id=${linkId}&rel=reconnect`)
        .then(resposta => resposta.json())
        .then(json => {
          const detalhe = {
            titulo: json.items[0].snippet.title,
            canal: json.items[0].snippet.channelTitle,
            thumb: json.items[0].snippet.thumbnails.high.url,
            link: `https://www.youtube.com/watch?v=${json.items[0].id}`
          };
          setDetalhes(detalhe);
        })
    } catch (error) {
      setDetalhes([])
      Alert.alert('Erro', 'Não foi possível carregar os dados do vídeo');
    }finally {
      setLoading(false)
    }
  }, [linkId]);

  if (!detalhes) return null;

  return (
    <View style={styles.ver}>
      <Pressable onPress={() => { Linking.openURL(detalhes.link) }}>
        <Shadow distance={18} startColor={'#eb9066d8'} endColor={'#ff00ff10'} offset={[3, -2]}>
          {loading ? <ActivityIndicator size="large" color="#00ff00" /> :
            <View style={styles.Vimg}>
              <Image
                source={{ uri: detalhes.thumb }}
                style={styles.img}
              />
            </View>}
        </Shadow>
      </Pressable>
      <Pressable onPress={() => { Linking.openURL(detalhes.link) }}>
        <Shadow distance={12} startColor={'#70c8fa'} endColor={'#ff00ff10'} offset={[3, -2]} style={styles.bot}>
          {loading ? <ActivityIndicator size="small" color="#00ff00" /> :
            <Text style={styles.tibut}>{`${detalhes.titulo} - ${detalhes.canal}`}</Text>}
        </Shadow>
      </Pressable>
    </View>
  )
}


function RodaPe() {
  return (
    <View >
      <Text style={styles.rodaText}>Developed by Lucas D. (A.K.A: ldverde)</Text>
    </View>
  )
}

const renderItemSeparator = () => {
  return <View style={{ height: 50 }} />
}

function HomeScreen() {
  const insets = useSafeAreaInsets();

  const getItemLayout = (_, index) => {
    return {
          length: 460, offset: 460 * index, index
        }
    }

  const keyExtractor = item => item.key

  const renderItem = useCallback(({item}) => (
    <View key={item.key}>
      <Item linkId={item.linkId} /> 
    </View>
   ), [])

  return (
    <View style={{ paddingTop: insets.top }}> 
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


export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style='dark' translucent={true} />
        <View style={styles.container}> 
          <HomeScreen />
        </View>
       
    </SafeAreaProvider>
  );
}