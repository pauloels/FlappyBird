import React, { useEffect } from 'react';
import {Image, View} from 'react-native';
import { styles } from './styles';

import imgGameOver from "../../../../assets/images/game-over.png";
import Play from "../../../../assets/images/play.png"

export function GameOver({ handleBackToStart }) {
  useEffect(() => {
    setTimeout(() => {
      handleBackToStart()
    }, 3000)
  }, [])

  return (
    <View style={styles.constainer}>
      <Image source={imgGameOver} style={styles.logo} />
    </View>
  );
}
