import React from 'react';
import {Image, StatusBar, Text, TouchableWithoutFeedback, View} from 'react-native';
import { styles } from './styles';

import Logo from "../../../../assets/images/logo.png";
import Play from "../../../../assets/images/play.png"

export function Start({ handleStartGame }) {
  return (
    <View style={styles.constainer}>
      <Image source={Logo} style={styles.logo} />
      <TouchableWithoutFeedback onPress={handleStartGame}>
      <Image source={Play} style={styles.playButton} />
      </TouchableWithoutFeedback>
    </View>
  );
}
