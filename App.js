import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './app/navigation/AppNavigator';

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <StatusBar style='light'/>
      <AppNavigator />
    </NavigationContainer>
  );
}
