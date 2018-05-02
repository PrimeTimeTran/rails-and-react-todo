import axios from 'axios';

import { API_ROOT } from '../api-config.js';

import {
  INITIAL_LIST,
  REMOVE_LIST,
  ADD_POST
} from './types'

export const removeList = (listId) => {
  axios.delete(`${API_ROOT}/lists/${listId}`)
  return (dispatch) => {
    dispatch({ type: REMOVE_LIST, payload: listId })
  }
}

export const initialLists = () => {
  return (dispatch) => {
    axios.get(`${API_ROOT}/lists`)
      .then(response => {
        dispatch({ type: INITIAL_LIST, payload: response.data })
      })
  }
}

export const addPost = (list) => {
  console.log('Adding Post Action')
  console.log(list)


  return(dispatch) => {
    axios({
      method: 'post',
      url: `${API_ROOT}/lists`,
      data: {
        list
      }
    }).then(response => {
      dispatch({ type: ADD_POST, payload: response.data })
    })
  }
}
