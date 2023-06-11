const redux = require('redux')
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()
const applyMiddleware = redux.applyMiddleware
CAKE_ORDERED = 'CAKE_ORDERED'
CAKE_RESTOCK = 'CAKE_RESTOCK'
ICECREAM_ORDER = 'ICECREAM_ORDER'
ICECREAM_RESTOCK = "ICECREAM_RESTOCK";

// action,returns an action(action creators)
function orderCake() {
  return {
  type:CAKE_ORDERED
  }
}

function restockCake(qty=1) {
  return {
    type: CAKE_RESTOCK,
    payload:qty
  }
}

function orderIceCream(qty=1) {
  return {
    type: ICECREAM_ORDER,
    payload:qty
  };
}

function restockIceCream(qty = 1) {
  return {
    type: ICECREAM_RESTOCK,
    payload:qty
  }
}
// initial state
const cakeinitialState = {
  noOfCakes:10
}
const icecreaminitialState = {
  noOfIcecream: 10,
};

// reducer function
const cakeReducer = (state = cakeinitialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return { ...state, noOfCakes: state.noOfCakes - 1 }
    case CAKE_RESTOCK:
      return {...state,noOfCakes:state.noOfCakes + action.payload}
    
    default:
      return state
    
  }
  
}

const icecreamReducer = (state = icecreaminitialState, action) => {
  switch (action.type) {
    case ICECREAM_ORDER:
      return {
        ...state,
        noOfIcecream: state.noOfIcecream - action.payload,
      };
    case ICECREAM_RESTOCK:
      return {
        ...state,
        noOfIcecream: state.noOfIcecream + action.payload,
      };
    case CAKE_ORDERED:
      return { ...state, noOfIcecream: state.noOfIcecream - 1 };
    default:
      return state;
  }
  
}

const rootReducer=combineReducers({
  cake: cakeReducer,
  icecream:icecreamReducer
})

const store = createStore(rootReducer,applyMiddleware(logger))
// since umesubscribe every time there is a change you get notified
const subscribe =store.subscribe(() => {
})
const actions = bindActionCreators({orderCake,restockCake,orderIceCream,restockIceCream},store.dispatch)
// actions.orderCake()
actions.orderIceCream(2)
actions.orderCake(2)


// store.dispatch(orderCake);
// store.dispatch(orderCake);

subscribe()