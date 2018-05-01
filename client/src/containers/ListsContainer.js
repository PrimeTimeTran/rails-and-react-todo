import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import { API_ROOT } from '../api-config.js';
import { initialLists, removeList } from '../actions/ListUpdateAction';

import List from '../components/List';
import NewListForm from '../components/NewListForm';

class ListsContainer extends Component {
  constructor(props) {
    super(props)
    this.props.initialLists();
  }

  removeList(listId) {
    this.props.removeList(listId);
  }

  render() {
    const { lists } = this.props;
    return (
      <div>
        {lists.map(list => {
            return (<List list={list} key={list.id} onRemoveList={this.removeList.bind(this)} />)
        })}
        <NewListForm onNewList={this.addNewList} />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    removeList, initialLists }, dispatch)
}

const mapReduxStateToProps = ({ lists }) => {
  return { lists };
};

export default connect(mapReduxStateToProps, mapDispatchToProps)(ListsContainer);