import { ActivityIndicator, Image, Alert, Linking, Text, View, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Shadow } from 'react-native-shadow-2';
import styles from '../styles';
const apisecret = process.env.API_KEY;
const url = process.env.API_URL;

console.log(apisecret,url)

export default function Item({ linkId }) {
    const [detalhes, setDetalhes] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => { 
        const fetchData = async () => {
            try {
                const response = await fetch(`${url}part=snippet&key=${apisecret}&id=${linkId}`);
                const json = await response.json();
                const detalhe = {
                    titulo: json.items[0].snippet.title,
                    canal: json.items[0].snippet.channelTitle,
                    thumb: json.items[0].snippet.thumbnails.high.url,
                    link: `https://www.youtube.com/watch?v=${json.items[0].id}`
                };
                setDetalhes(detalhe);
            } catch (error) {
                Alert.alert('Erro', 'Não foi possível carregar os dados do vídeo');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [linkId]);

    if (loading) return <ActivityIndicator size="large" color="#00ff00" />;

    if (!detalhes) return null; 
    
    return (
      <View style={styles.ver}>
          <Pressable onPress={() => { Linking.openURL(detalhes.link) }}>
              <Shadow distance={18} startColor={'#eb9066d8'} endColor={'#ff00ff10'} offset={[3, -2]}>
                  <View style={styles.Vimg}>
                      <Image
                          source={{ uri: detalhes.thumb }}
                          style={styles.img}
                      />
                  </View>
              </Shadow>
          </Pressable>
          <Pressable onPress={() => { Linking.openURL(detalhes.link) }}>
              <Shadow distance={12} startColor={'#70c8fa'} endColor={'#ff00ff10'} offset={[3, -2]} style={styles.bot}>
                  <Text style={styles.tibut}>{`${detalhes.titulo} - ${detalhes.canal}`}</Text>
              </Shadow>
          </Pressable>
      </View>
  );
  } 
  