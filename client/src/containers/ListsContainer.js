import React, { Component } from 'react';
import axios from 'axios';

import List from '../components/List';
import NewListForm from '../components/NewListForm';

class ListsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
        lists: [],
        editingListId: null
    }
    this.addNewList = this.addNewList.bind(this)
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/lists.json')
    .then(response => {
      console.log(response)
      this.setState({
          lists: response.data
      })
    })
    .catch(error => console.log(error))
  }

  addNewList(name) {
    console.log('This is a new list: ', name)
  }

  render() {
    return (
      <div className="lists-container">
        {this.state.lists.map( list => {
            return (<List list={list} key={list.id} onRemoveList={this.removeList} />                    )
        })}
        <NewListForm onNewList={this.addNewList} />
      </div>
    )
  }
}

export default ListsContainer;