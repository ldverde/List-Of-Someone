import React, { useState } from 'react';
import { View } from 'react-native';
import TypeWriter from 'react-native-typewriter';
import styles from '../styles';

function TypingText() {
  const [typing, setTyping] = useState(1);
  const [typi, setTypi] = useState(0);

  const handleTypingEnd = () => {
    if (typing === 1) {
      setTimeout(() =>
        setTyping(-1),2600) 
    }
    else if(typing === -1){
      setTimeout(() =>
        setTypi(1),1000)
    }
  }

  return ( 
      <View>
      <TypeWriter typing={typing} onTypingEnd={handleTypingEnd} style={styles.titulo} initialDelay={7500} minDelay={20} maxDelay={70}>
         Seja Bem Vindo(a) a sua lista de vídeos! 
       </TypeWriter>
      <TypeWriter typing={typi} fixed={true}  style={styles.titulo} minDelay={20} maxDelay={60}>
          Os vídeos estão logo abaixo, basta clicar:
      </TypeWriter> 
      </View>
    )
}
export default TypingText;
