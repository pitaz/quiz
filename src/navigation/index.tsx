import React from 'react';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';
import {StackNavigationProp} from '@react-navigation/stack';
import Home from '../screens/Home';
import Questions from '../screens/Questions';
import Result from '../screens/Result';


type RootStackParamList = {
  home: undefined;
  questions: undefined;
  result: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList>;
type NavigationRouteProp = RouteProp<RootStackParamList, 'home'>;

export type Props = {
  navigation: NavigationProp;
  route: NavigationRouteProp | any;
};

const Stack = createStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false, gestureEnabled: false}}
          initialRouteName="home">
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="questions" component={Questions} />
          <Stack.Screen name="result" component={Result} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
