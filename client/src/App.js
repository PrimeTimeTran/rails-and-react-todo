import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Grid, Row, Col, Modal } from 'react-bootstrap'

import './App.css';
import reducers from './reducers';

import ListsContainer from './containers/ListsContainer';
import Navbar from './containers/Navbar';
import { Button } from 'react-bootstrap';
import NewPostForm from './components/NewPostForm';

class App extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);

    this.state = {
      popupVisible: false
    };
  };

  handleClick() {
    if (!this.state.popupVisible) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.setState(prevState => ({ popupVisible: !prevState.popupVisible }));
  }

  handleOutsideClick(e) {
    if (e.target.getAttribute('tabIndex')) {
      return this.closeModal()
    }
  }

  closeModal() { this.setState({ popupVisible: false }) }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <div className="App" ref={node => this.node = node}>
        <Navbar />
        <Provider store={store}>
          <Grid>
            <Row className="show-grid" style={styles.firstRow}>
              <Col xs={12} md={8}>
                <NewPostForm />
                <ListsContainer />
              </Col>
              <Col xs={0} md={4}>
                <Button onClick={this.handleClick}>New Post</Button>
              </Col>
            </Row>

            <Row className="show-grid" style={styles.secondRow}>
              <Col xs={6} md={4}>
                <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
              </Col>
              <Col xs={6} md={4}>
                <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
              </Col>
              <Col xsHidden md={4}>
                <code>&lt;{'Col xsHidden md={4}'} /&gt;</code>
              </Col>
            </Row>

            <Row className="show-grid" style={styles.thirdRow}>
              <Col xs={6} xsOffset={3}>
                <code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code>
              </Col>
            </Row>
            <Row className="show-grid" style={styles.fourthRow}>
              <Col md={6} mdPush={6}>
                <code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code>
              </Col>
              <Col md={6} mdPull={6}>
                <code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code>
              </Col>
            </Row>
            <div ref={node => { this.node = node; }}>
            { this.state.popupVisible &&
              (
                <Modal.Dialog style={{ backgroundColor: 'rgba(52, 52, 52, 0.8)'}} >
                <div>
                  <Modal.Header>
                    <Modal.Title>New Post</Modal.Title>
                  </Modal.Header>

                  <Modal.Body >One fine body...</Modal.Body>

                  <Modal.Footer>
                    <Button onClick={() => this.closeModal()}>Cancel</Button>
                    <Button bsStyle="primary">Post</Button>
                  </Modal.Footer>
                </div>
              </Modal.Dialog>)
            }</div>

          </Grid>
        </Provider>
      </div>
    );
  }
}

const styles = {
  firstRow: {
    backgroundColor: 'red'
  },
  secondRow: {
    backgroundColor: 'pink'
  },
  thirdRow: {
    backgroundColor: 'blue'
  },
  fourthRow: {
    backgroundColor: 'yellow'
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