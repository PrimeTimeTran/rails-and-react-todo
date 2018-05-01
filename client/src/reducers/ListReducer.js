import {
  INITIAL_LIST,
  REMOVE_LIST
} from '../actions/types';

const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REMOVE_LIST:
      console.log('Removing List')
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
      // console.log('REDUCER: Initial List Reducer', action.payload)
      return action.payload
    default:
      return state;
  }
};
