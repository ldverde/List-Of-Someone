import React, { useEffect, useState } from 'react';
import { View,Text } from 'react-native';
import styles from '../styles';
import TypeWriterEffect from 'react-native-typewriter-effect';

function Second({ onSecond }){

  return <View>
    <TypeWriterEffect onTypingEnd={onSecond} style={styles.titulo} content='Os vídeos estão logo abaixo, basta clicar:' />
    </View>
} 

function TypingText({onDone}) {
  const [Pronto, SetPronto] = useState(false)

  const handlePronto = () => {
    
    SetPronto(true)
  } 

  return ( 
      <View>
      <TypeWriterEffect
      style={styles.titulo}
       content='Seja Bem Vindo(a) a sua lista de vídeos! '
      onTypingEnd={() => setTimeout(handlePronto,1500)}
       /> 
      {Pronto && <Second onSecond={onDone} />}
      </View>
    )
  }
export default TypingText;
