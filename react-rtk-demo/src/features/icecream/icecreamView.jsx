import { useSelector, useDispatch, } from "react-redux";
import {order,restock} from './icecreamSlice'
import { useState } from "react";
const IcecreamView = () => {
  const noOficecreams = useSelector((state) => state.icecream.noOfIcecream)
  const dispatch = useDispatch()
  const [value,setValue]=useState(1)
  return (
    <div>
      <h2>Number of icecreams - {noOficecreams}</h2>
      <button onClick={() => dispatch(order(1))}>Order icecream</button>
      <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={()=>dispatch(restock(parseInt(value)))}>Restock icecream</button>
    </div>
  );
}

export default IcecreamView