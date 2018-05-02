import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { API_ROOT } from '../api-config.js';

import { addPost } from '../actions/ListUpdateAction';
import { FormGroup, ControlLabel, FormControl, HelpBlock, InputGroup, Glyphicon } from 'react-bootstrap'

 class NewPostForm extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ''
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.addPost({ excerpt: this.state.value, title: 'Loi Posted' })
    this.setState({ value: '' });

    // Post directly in the component
    // axios({
    //   method: 'post',
    //   url: `${API_ROOT}/lists`,
    //   data: {
    //     list: { excerpt: this.state.value, title: "Loi's Post" }
    //   }
    // });
    // this.setState({ value: '' });
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

const mapStateToProps = (state) => {
  console.log(state)
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addPost }, dispatch)
}

export default connect(null, mapDispatchToProps)(NewPostForm)