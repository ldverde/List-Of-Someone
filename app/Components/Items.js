import { ActivityIndicator, Image, Alert, Linking,Text, View, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Shadow } from 'react-native-shadow-2';
import styles from '../styles';

export default function Item({ linkId }) {
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
  