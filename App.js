import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {AppLoading} from 'expo';
import {useFonts, Anton_400Regular} from '@expo-google-fonts/anton';

import Routes from './src/route';

export default function App() {

   let fontsLoadel = useFonts({
    Anton_400Regular,
  });

  if(!fontsLoadel){
    return <AppLoading/>;
  }

  return (
    <>
      <StatusBar style="light" backgroundColor="#000" translucent={true}/>
      <Routes/>   
  
    </>
  );
}


