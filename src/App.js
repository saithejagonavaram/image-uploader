import React from 'react';
import logo from './logo.svg';

import {Provider} from 'react-redux';

import './App.css';

import './styles/main.scss';

import store from './store';

import ImagesContainer from './containers/ImagesContainer';


console.log('store',store);
function App() {
  return (
    <div className="App">
      <Provider  store={store}>
        <ImagesContainer />
     
      </Provider>
    </div>
  );
}

export default App;
