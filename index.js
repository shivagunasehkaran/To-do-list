/**
 * @format
 */
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AppRegistry, SafeAreaView, View} from 'react-native';
import {name as appName} from './app.json';
import App from './src/App';

AppRegistry.registerComponent(appName, () => {
  return () => (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1, backgroundColor: 'pink'}}>
        <View style={{flex: 1}}>
          <App />
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
});
