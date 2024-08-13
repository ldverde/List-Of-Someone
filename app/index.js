import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Image, Alert, Linking, FlatList, Text, View, Pressable, ScrollView } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { lista } from '../Lista';
import React, { Component, useState, useEffect } from 'react';
import TypeWriter from 'react-native-typewriter';
import { Shadow } from 'react-native-shadow-2';
import styles from './styles';
import { FixedSizeList as List } from 'react-window';

class TypingText extends Component {
  render() {
    return <View >
      <TypeWriter style={styles.titulo} initialDelay={1000} typing={1} minDelay={20} maxDelay={60}> Seja Bem Vindo a sua lista de vídeos, os quais foram recomendados por... você deve saber quem.</TypeWriter>
      <TypeWriter style={styles.titulo} initialDelay={10000} typing={1} minDelay={20} maxDelay={60}> {"\n"}{"\n"} Bem, os vídeos estão logo abaixo, basta clicar:</TypeWriter>
    </View>
  }
}

const link = lista.map(e => e.linkId);

const Item = ({ index, style }) => {
  const [detalhes, setDetalhes] = useState(null);
  const [loading, setLoading] = useState(true);
  const linkId = link[index];

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
    } finally {
      setLoading(false)
    }
  }, [linkId]);

  if (!detalhes) return null;

  return (
    <View style={[styles.ver, style]}>
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


function HomeScreen() {
  return (
    <View>
      <List
        height={600}
        itemCount={link.length}
        itemSize={100}
        width={100}
      >
        {({ index, style }) => <Item index={index} style={style} />}
      </List>
    </View>
  );
}



function RodaPe() {
  return (
    <View style={styles.rodaPe}>
      <Text style={styles.rodaText}>Developed by Lucas D. (A.K.A: ldverde)</Text>
    </View>
  )
}

export default function App() {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider>
      <StatusBar style='dark' translucent={true} />
      <ScrollView style={styles.scroll} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={[styles.container, { paddingTop: insets.top }]} >
          <View style={styles.Typi} >
            <TypingText />
          </View>
          <HomeScreen />
        </View>
      </ScrollView>
      <RodaPe />
    </SafeAreaProvider>
  );
}