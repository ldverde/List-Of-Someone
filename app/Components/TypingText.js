import React, {Component} from "react";
import TypeWriter from 'react-native-typewriter';
import { View } from 'react-native';
import styles from '../styles';

export default class TypingText extends Component {
    render() {
      return <View>
        <TypeWriter style={styles.titulo} initialDelay={1000} typing={1} minDelay={20} maxDelay={60}> Seja Bem Vinda a sua lista de vídeos, os quais foram recomendados por... você deve saber quem.</TypeWriter>
        <TypeWriter style={styles.titulo} initialDelay={10000} typing={1} minDelay={20} maxDelay={60}> {"\n"}{"\n"} Bem, os vídeos estão logo abaixo, basta clicar:</TypeWriter>
      </View>
    }
  }