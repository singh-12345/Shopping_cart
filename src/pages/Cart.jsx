import { useSelector } from "react-redux";
import { useState,useEffect } from "react";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";


const Cart = () => {
  const {cart}=useSelector((state)=>state);

  // console.log(cart);

  const [totalAmount,setTotalAmount]=useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>acc + curr.price,0))
  },[cart])


  return (
    <div >
      {
        cart.length > 0 ? (
          <div className="flex flex-row">
            <div>
              {
                cart.map((item,index)=>{
                  return <CartItem key = {item.id} item = {item}
                  itemIndex = {index}/>
                })
              }
            </div>

                  
                    <div>

            <div className=" mt-10 ml-20">

              <div className="text-orange-600 font-semibold uppercase">Your Cart</div>
              <div className="text-green-600 font-semibold uppercase text-3xl">Summary</div>

              <p>
                <span className="font-bold">Total Items : {cart.length}</span>
              </p>

            </div>


            <div className="fixed bottom-5 ml-20 w-full">

              <p>Total Amount :<span className="font-semibold"> ${totalAmount}</span></p>
                
              <button className="text-white bg-blue-500 border-2  rounded-full font-semibold
           text-[15px] p-2 px-20 
           hover:bg-gray-700
           hover:text-white transition duration-300 ease-in mt-3">Checkout Now</button>
            </div>
            </div>
           </div>
             

        ):
        (<div>
          <h1>Cart Empty</h1>
          <Link to = {"/"}>
            <button>Shop Now</button>
            </Link>
            </div>)
      }
    </div>
  )
};

export default Cart;
