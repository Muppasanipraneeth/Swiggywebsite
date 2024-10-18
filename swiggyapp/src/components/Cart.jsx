import { useDispatch, useSelector } from "react-redux";
import Menucard from "./Menucard";
import { clearCart } from "../utils/Cardslice";
const Cart=()=>{
    const dispatch =useDispatch();
    const handleClear=()=>{
        dispatch(clearCart());

    }
    const cart=useSelector((store)=>store.cart.items);
    console.log(cart);
    
    return(<>
    <div className="ml-40 justify-center items-center  shadow-lg rounded-sm">
        {cart.length==0? <div>
            this cart is Empty order some food 
        </div>:<div>
            <button className="bg-black text-white rounded-lg text-center ml-48" onClick={handleClear}>clearCart</button>
            {cart.map((res,ind)=>(<Menucard  res={res}/>))}
            </div>}

      

    </div>
    </>)
}
export default Cart;