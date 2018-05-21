import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE
} from '../actions/tickets.action';

const initialState = {
  tickets: []
};

export default function tickets(state = { ...initialState }, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS: {
      debugger;
      return [
        ...state,
        {
          tickets: action.payload.tickets
        }
      ];
    }
    default: {
      return state;
    }
  }
}
