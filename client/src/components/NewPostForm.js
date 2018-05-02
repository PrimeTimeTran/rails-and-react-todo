import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap'

 class NewPostForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <FormGroup>
        <ControlLabel>Working example with validation</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        <HelpBlock>Validation is based on string length.</HelpBlock>
      </FormGroup>
    )
  }
};

export default NewPostForm