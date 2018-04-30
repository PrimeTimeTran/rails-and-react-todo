import React, { Component } from 'react';

class NewListForm extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onNewList(term);
  }

  render() {
    return (
        <div>
          <input
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)}
          />
        </div>
    );
  }
}

export default NewListForm