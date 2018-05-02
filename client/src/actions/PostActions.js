import axios from 'axios';

import { API_ROOT } from '../api-config.js';

import {
  POST_INITIAL,
  POST_REMOVE,
  ADD_POST
} from './types'

export const removePost = (postId) => {
  axios.delete(`${API_ROOT}/lists/${postId}`)
  return (dispatch) => {
    dispatch({ type: POST_REMOVE, payload: postId })
  }
}

export const initialPosts = () => {
  return (dispatch) => {
    axios.get(`${API_ROOT}/lists`)
      .then(response => {
        dispatch({ type: POST_INITIAL, payload: response.data })
      })
  }
}

export const addPost = (list) => {
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
