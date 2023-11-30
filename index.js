import { registerRootComponent } from 'expo';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { name as appName } from './app.json';
import React from 'react';
import App from './App';


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
const RNRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);
registerRootComponent(App);
