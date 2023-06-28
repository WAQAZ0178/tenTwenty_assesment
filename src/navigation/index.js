import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import {colors} from '../globals/utilities';
import {StatusBar} from 'react-native';
import App from './app';
const AppStack = createStackNavigator();
const AppNavigator = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar
          backgroundColor={colors.white}
          barStyle="dark-content"
          translucent={false}
        />
        <AppStack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={'App'}>
          <AppStack.Screen name="App" component={App} />
        </AppStack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default AppNavigator;
