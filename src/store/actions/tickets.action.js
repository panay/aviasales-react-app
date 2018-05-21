export function fetchTickets() {
  return dispatch => {
    dispatch(fetchTicketsBegin());
    return fetch("/backend/tickets.json")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => dispatch(fetchTicketsSuccess(json.tickets)))
      .catch(error => dispatch(fetchTicketsFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const FETCH_TICKETS_BEGIN   = 'FETCH_TICKETS_BEGIN';
export const FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS';
export const FETCH_TICKETS_FAILURE = 'FETCH_TICKETS_FAILURE';

export const fetchTicketsBegin = () => ({
  type: FETCH_TICKETS_BEGIN
});

export const fetchTicketsSuccess = tickets => ({
  type: FETCH_TICKETS_SUCCESS,
  payload: { tickets }
});

export const fetchTicketsFailure = error => ({
  type: FETCH_TICKETS_FAILURE,
  payload: { error }
});
