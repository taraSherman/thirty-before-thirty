import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { itemListView } from './views'

function Home() {
  return (
    <Provider store={store}>
      <div className="App">
        <itemListView />
      </div>
    </Provider>
  );
}

export default Home;