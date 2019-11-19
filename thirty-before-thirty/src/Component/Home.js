/*
This is what I actually had inside App.js, but since there was already something there, I just put it into Home.js temporarily. (TDS)
*/

import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { ItemListView } from './views'

function Home() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemListView />
      </div>
    </Provider>
  );
}

export default Home;