import { registerRootComponent } from 'expo';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';



// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately~
//serviceWorker.register();



registerRootComponent(App);

