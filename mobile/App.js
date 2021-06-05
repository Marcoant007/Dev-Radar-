import { StatusBar, LogBox } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes';


LogBox.ignoreLogs([
  'Unrecognized WebSocket'
])


export default function App() {
  return (
    <>
    <StatusBar  barStyle="ligh-content" backgroundColor="#7D40E7"/>
    <Routes />
    </>
  );
}

