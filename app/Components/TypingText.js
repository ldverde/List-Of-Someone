 
import { View } from 'react-native';
import React, { Component } from 'react';
import TypeWriter from 'react-native-typewriter';
import styles from '../styles';

class TypingText extends Component {


  render() {
     let delayMap = [
      { at: /!/, delay: 1000 }
    ]
    return (
      <View>
        <TypeWriter
          style={styles.titulo}
          initialDelay={2000}
          typing={1}
          minDelay={20}
          maxDelay={60}
          delayMap={delayMap} 
        >
          Seja Bem Vinda a sua lista de vídeos, os quais foram recomendados por... você deve saber quem! {"\n"}{"\n"}Bem, os vídeos estão logo abaixo, basta clicar:
        </TypeWriter>
      </View>
    );
  }
}

export default TypingText;
