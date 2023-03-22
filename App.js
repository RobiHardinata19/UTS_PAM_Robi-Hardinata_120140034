import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screen/HomePage';
import Lagu1 from './screen/Lagu1';
import Lagu2 from './screen/Lagu2';
import Lagu3 from './screen/Lagu3';
import Lagu4 from './screen/Lagu4';
import Profile from './screen/Profile';

const Stack = createNativeStackNavigator();

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Lagu1" component={Lagu1} options={{ headerShown: false }}/>
        <Stack.Screen name="Lagu2" component={Lagu2} options={{ headerShown: false }}/>
        <Stack.Screen name="Lagu3" component={Lagu3} options={{ headerShown: false }}/>
        <Stack.Screen name="Lagu4" component={Lagu4} options={{ headerShown: false }}/>
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}