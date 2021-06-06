/**
 * @format
 */
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AppRegistry, SafeAreaView, View} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {name as appName} from './app.json';
import App from './src/App';
import {store, persistor} from './src/store';

AppRegistry.registerComponent(appName, () => {
  return () => (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaView style={{flex: 1, backgroundColor: 'pink'}}>
            <View style={{flex: 1}}>
              <App />
            </View>
          </SafeAreaView>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
});
