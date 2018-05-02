import React, { Component } from 'react';
import axios from 'axios';

import { API_ROOT } from '../api-config.js';

import { FormGroup, ControlLabel, FormControl, HelpBlock, InputGroup, Glyphicon } from 'react-bootstrap'

 class NewPostForm extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      body: ''
    };
  }

  getValidationState() {
    const length = this.state.body.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ body: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('Submitting Post')

    // Attempt 1
    // let params = { list: { title: 'go', excerpt: 'Go'}}
    // axios.post(`${API_ROOT}/lists`, { params }, )
    //   .then(response => {
    //     console.log('Response: ', response)
    //     console.log('Response.data: ', response.data)
    // })


    // Attempt 2
    axios({
      method: 'post',
      url: `${API_ROOT}/lists`,
      data: {
        list: { excerpt: 'go' }
      }
    });

  }

  render() {
    return (
      <form onClick={this.props._handleClick} onSubmit={(e) => this.handleSubmit(e)}>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Working example with validation</ControlLabel>
          <InputGroup>
            <InputGroup.Addon><Glyphicon glyph="pencil" /></InputGroup.Addon>
              <FormControl
                type="text"
                value={this.state.value}
                placeholder="Enter text"
                onChange={this.handleChange}
              />
          </InputGroup>
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>
      </form>
    );
  }
};

export default NewPostForm