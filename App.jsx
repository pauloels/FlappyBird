import * as React from 'react';
import { Routes } from './src/routes';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar style="auto" hidden />
      <Routes />
    </>
  )
};

export default App;
