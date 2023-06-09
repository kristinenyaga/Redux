// initial state
const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')
const initialState = {
  loading: true,
  data: [],
  error:''
}

// action type

const FETCH_DATA_REQUESTED = "FETCH_DATA_REQUESTED";
const FETCH_DATA_SUCCESSFUL = "FETCH_DATA_SUCCESSFUL";
const FETCH_DATA_FAILED = "FETCH_DATA_FAILED";

// ACTION CREATORS

const fetch_data_request = () => {
  return {
    type: FETCH_DATA_REQUESTED,
    payload: true
  }
}

const fetch_data_successful = (users) => {
  return {
    type: FETCH_DATA_SUCCESSFUL,
    payload: users,
  };

    
}

const fetch_data_failed = (error) => {
  return {
    type: FETCH_DATA_FAILED,
    payload:error
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUESTED:
      return {
        ...state,loading:true
      }
    case FETCH_DATA_SUCCESSFUL:
      return {
        ...state, loading: false,data:action.payload
      }
    case FETCH_DATA_FAILED:
      return {
        loading:false,error:action.payload,data:[]
      }
  }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))

const fetchData = () => {
  return function (dispatch) {
    dispatch(fetch_data_request());

    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        const users = request.data.map(user => user.username)
        dispatch(fetch_data_successful(users));
      })
      .catch((error) => {
        dispatch(fetch_data_successful(error.message));
      });
  };
}

const subscribe = store.subscribe(() => {
  console.log(`initial state`,store.getState());
})

store.dispatch(fetchData())