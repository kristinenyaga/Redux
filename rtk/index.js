const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const icecreamActions = require('./features/icecream/icecreamSlice').icecreamActions
const fetchUsers = require('./features/user/userSlice').fetchUsers
console.log('initial state', store.getState())
const unsubscribe = store.subscribe(() => {})

// store.dispatch(cakeActions.order(2))
// store.dispatch(icecreamActions.order(2));

store.dispatch(fetchUsers())

