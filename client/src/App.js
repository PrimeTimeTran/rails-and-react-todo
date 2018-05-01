import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Grid, Row, Col } from 'react-bootstrap'

import './App.css';
import reducers from './reducers';

import ListsContainer from './containers/ListsContainer'

class App extends Component {

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <div className="App">
        <Provider store={store}>
          <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              <ListsContainer />
            </Col>
            <Col xs={6} md={4}>
              <code>&lt;{'Col xs={6} md={4}'} /">&gt;</code>
            </Col>
          </Row>

          </Grid>
        </Provider>
      </div>
    );
  }
}

export default App;

// import React from 'react';
// import PropTypes from 'prop-types';

// class MousePositionProvider extends React.Component {
//   constructor( ) {
//     super();
//     this.state = { };
//     this.onMouseMove = this.onMouseMove.bind( this );
//   }

//   getChildContext() {
//     return {
//       posX: this.state.posX,
//       posY: this.state.posY
//     };
//   }

//   componentDidMount( ) {
//     window.addEventListener( "mousemove", this.onMouseMove );
//   }

//   onMouseMove( e ) {
//     this.setState({ posX: e.clientX, posY: e.clientY });
//   }

//   render( ) {
//     return this.props.children
//   }
// }

// MousePositionProvider.childContextTypes = {
//   posX: PropTypes.number,
//   posY: PropTypes.number
// };



// class MousePositionConsumer extends React.Component {
//   render( ) {
//     return (
//       <div>Your position is ( {this.context.posX},{this.context.posY} )</div>
//     )
//   }
// }

// MousePositionConsumer.contextTypes = {
//   posX: PropTypes.number,
//   posY: PropTypes.number
// };



// const App = () => (
//   <MousePositionProvider>
//     <div>
//       <MousePositionConsumer />
//       <MousePositionConsumer />
//     </div>
//   </MousePositionProvider>
// );

// export default App