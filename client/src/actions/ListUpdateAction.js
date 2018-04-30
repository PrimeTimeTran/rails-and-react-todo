import axios from 'axios';

import { API_ROOT } from '../api-config.js';

import {
  INITIAL_LIST,
  REMOVE_LIST
} from './types'

export const removeList = (listId) => {
  return (dispatch) => {
    dispatch({ type: REMOVE_LIST, payload: listId })
  }
}

export const initialLists = () => {
  return (dispatch) => {
    axios.get(`${API_ROOT}/lists`)
      .then(response => {
        // console.log('ACTION: Lists in InitialLists', response.data)
        dispatch({ type: INITIAL_LIST, payload: response.data })
      })
  }
}
