
import { useSelector, useDispatch } from 'react-redux'
import {order,restock} from './cakeSlice'
const CakeView = () => {
  // accepts a function as its parameter,the function receives redux state as its argument
  const numofCakes = useSelector((state) => state.cake.noOfCakes )
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of cakes - {numofCakes} </h2>
      <button onClick={() => dispatch(order(1))}>Order cake</button>
      <button onClick={() => dispatch(restock(1))}>Restock cake</button>

    </div>
  )
}

export default CakeView