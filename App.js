import React from 'react';
import {Text, View} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Button from './src/Button';
import reducer from './src/reducer';


const App = () => {
  return (
    <Provider store={createStore(reducer)}>
      <Button />
    </Provider>
  );
}

export default App;