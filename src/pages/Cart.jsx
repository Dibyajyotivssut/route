import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {

  const {cart}=useSelector((state)=>{
    return state;
  })
    const [totalamount,settotalamount]=useState(0);
    useEffect(()=>{
      settotalamount(cart.reduce((acc,curr)=>acc+curr.price,0))
    },[cart])
  return (
    <div>
      {cart.length > 0 ? (
        <div className=" flex justify-between pl-4 pr-16">
          <div>
            {cart.map((item, index) => {
              return <CartItem item={item} />;
            })}
          </div>
          <div>
            <div>
              <p>your cart</p>
              <h1>Summery</h1>
              <p>
                total items <span>{cart.length}</span>
              </p>
            </div>
            <div>
              <p>total amount:${totalamount}</p>
              <button>Check out</button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>No item found</h1>
          <NavLink to="/">
            <button>Home</button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
