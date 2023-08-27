import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem"
import { useEffect, useState } from "react";




const Cart = () => {


  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price, 0) )
  },[cart])

  return (
    <div className="min-h-[80vh] " >

      <div className="max-w-[1200px] mx-auto mt-2 flex justify-between">
        {
          cart.length > 0 ? 
          (
            <div className="  w-full  flex flex-col md:flex-row justify-between items-center gap-4 ">
              <div className=" w-[100%]  p-5  mx-auto md:mx-5">
                {
                  cart.map( (item, index) => (
                    <CartItem key={item.id} item={item} itemIndex={index} />
                  ))
                }
              </div>

              <div className=" w-[100%] h-[100%]  flex flex-col justify-between p-5   ">
                <div className="flex flex-col gap-5 mt-[4.4rem]">
                  <p className=" text-[20px] text-green-800 uppercase font-semibold">Your Cart</p>
                  <p className=" text-5xl text-green-700 uppercase font-semibold -mt-5">Summary</p>
                  <p className=" text-xl font-semibold text-gray-800 ">Total Items: <span className="text-xl font-normal">{cart.length}</span></p>
                </div>

                <div className="w-[100%] flex flex-col gap-5 mb-[4.4rem]">
                  <p className=" text-xl font-semibold text-gray-800 mt-4">Total Amount: <span className="font-bold text-black">${totalAmount}</span></p>
                  <button 
                  className="w-full bg-green-700 text-white text-center text-xl font-bold py-3 rounded-xl hover:text-green-700 hover:bg-transparent border-2 border-green-700
                  transition-all ease-in duration-300 "
                  >
                    Checkout Now
                  </button>
                </div>
              </div>

            </div>
          ) : 
          (
            <div className=" min-h-[70vh] flex flex-col justify-center items-center mx-auto">
              <p className=" text-xl font-semibold text-gray-700 mb-2">Your cart is empty!</p>
              <NavLink to={'/'}>
                <button 
                className="  bg-green-600 text-white text-center uppercase font-bold p-3 px-10 rounded-xl hover:text-green-700 hover:bg-transparent border-2 border-green-600
                  transition-all ease-in duration-300 tracking-wider mt-5"
                >
                  Shop Now
                </button>
              </NavLink>
            </div>
          )
        }
      </div>

    </div>
  );
};

export default Cart;
