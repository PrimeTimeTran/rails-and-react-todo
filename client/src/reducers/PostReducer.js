import {
  POST_INITIAL,
  POST_REMOVE,
  ADD_POST
} from '../actions/types';

const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POST_REMOVE:
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

    case POST_INITIAL:
      return action.payload

    case ADD_POST:
      return [ action.payload, ...state ]

    default:
      return state;
  }
};
