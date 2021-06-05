/**
 * @format
 */
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AppRegistry, SafeAreaView, View} from 'react-native';
import {Provider} from 'react-redux';
import {name as appName} from './app.json';
import App from './src/App';
import store from './src/store';

AppRegistry.registerComponent(appName, () => {
  return () => (
    <NavigationContainer>
      <Provider store={store}>
        <SafeAreaView style={{flex: 1, backgroundColor: 'pink'}}>
          <View style={{flex: 1}}>
            <App />
          </View>
        </SafeAreaView>
      </Provider>
    </NavigationContainer>
  );
});
