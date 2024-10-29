import React from 'react';
import { ImageBackground } from 'react-native';

import { Game } from './game';

import imgBackground from '../../assets/images/background.png'; 

import { styles } from './styles';


export function Home() {
  return (
    <>
      <ImageBackground source={imgBackground} style={styles.imageSplash}>
        <Game />
      </ImageBackground>
    </>
  );
}
