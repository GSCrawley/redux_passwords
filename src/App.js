import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

import React, { Component } from 'react';
import './App.css';
import Password from './password';
import PasswordList from './password-list';
import { loadState, saveState } from './local_storage'


const persistedState = loadState();
const store = createStore(reducers, persistedState);
store.subscribe(() => {
  saveState(store.getState());
})

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Password />
          <PasswordList />
        </div>
        </Provider>
    );
  }
}

export default App;
