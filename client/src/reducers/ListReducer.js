import {
  INITIAL_LIST,
  REMOVE_LIST,
  ADD_POST
} from '../actions/types';

const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REMOVE_LIST:
      let arr = []
      arr = arr.concat(state)

      arr = arr.map(function(el) {
        let giveBack = (el.id !== action.payload)
        if (giveBack) {
          return el
        }
        return undefined
      });
      arr = arr.filter(item => item !== undefined);

      return arr
    case INITIAL_LIST:
      return action.payload

    case ADD_POST:
      console.log('Adding a Post')
      console.log('Actions Payload: ', action.payload)
      return [ action.payload, ...state ]

    default:
      return state;
  }
};
