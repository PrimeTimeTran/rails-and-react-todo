import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import './App.css';
import reducers from './reducers';

import ListsContainer from './containers/ListsContainer'

class App extends Component {

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <div className="App">
        <Provider store={store}>
          <ListsContainer />
        </Provider>
      </div>
    );
  }
}

export default App;
