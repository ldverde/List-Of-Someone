import { ActivityIndicator, Image, Alert, Linking, Text, View, Pressable } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import styles from '../styles';
import React from 'react';

export default function Item({ item }) {
    if (!item.titulo) {
      return null;  
    }     

    return (
      <View style={styles.ver}>
       
          <Pressable onPress={() => { Linking.openURL(item.link) }}>
              <Shadow distance={18} startColor={'#eb9066d8'} endColor={'#ff00ff10'} offset={[3, -2]}>
                  <View style={styles.Vimg}>
                      <Image
                          source={{ uri: item.thumb }}
                          style={styles.img}
                      />
                  </View>
              </Shadow>
          </Pressable>
          <Pressable onPress={() => { Linking.openURL(item.link) }}>
              <Shadow distance={12} startColor={'#70c8fa'} endColor={'#ff00ff10'} offset={[3, -2]} style={styles.bot}>
                  <Text style={styles.tibut}>{`${item.titulo} - ${item.canal}`}</Text>
              </Shadow>
          </Pressable>
      </View>
  );
  } 
  