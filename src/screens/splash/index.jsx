import React, { useEffect } from 'react';
import { Image, StatusBar } from 'react-native';
import { styles } from './styles';

import imgSplash from '../../../assets/splash.png';

export function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home')
    }, 3000)
  }, [])

  return (
    <Image source={imgSplash} style={styles.imageSplash} />
  );
}
