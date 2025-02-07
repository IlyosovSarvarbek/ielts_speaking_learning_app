import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Part1 from '../screens/Part1';
import Part2 from '../screens/Part2';
import Part3 from '../screens/Part3';
import Topic from '../screens/Topic';
import { Theme } from '../styles/styles';
import Search from '../screens/Search';

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerTitleAlign: "center",
      headerStyle: { backgroundColor: Theme.mainColor },
      headerTintColor: Theme.textColor,
      presentation:"transparentModal",
      headerTitleStyle: { 
        textAlign: "center",
        fontWeight: '500',
        fontSize: 18,
        width: "100%",
      },
      animation: "slide_from_right",
      gestureEnabled: true,
    }}
  >
    <Stack.Screen 
      name="Home" 
      component={Home} 
      options={{ headerTitle: "IELTS Speaking" }} 
    />
    <Stack.Screen 
      name="Search" 
      component={Search}
      options={{ headerShown: false }} 
    />
    <Stack.Screen 
      name="Part1" 
      component={Part1} 
      options={{ title: "Part 1" }} 
    />
    <Stack.Screen 
      name="Part2" 
      component={Part2} 
      options={{ title: "Part 2" }} 
    />
    <Stack.Screen 
      name="Part3" 
      component={Part3} 
      options={{ title: "Part 3" }} 
    />
    <Stack.Screen 
      name="Topic" 
      component={Topic} 
      options={({ route,}) => ({
        title: route.params?.title || "Topic",
        animation:'slide_from_bottom',
      })} 
    />
  </Stack.Navigator>
);

export default AppNavigator;