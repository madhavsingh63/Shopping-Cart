import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";
import {toast} from "react-hot-toast"


const Product = ({post}) => {

  const [selected, setSelected] = useState(false);

  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();
  

 
  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from cart!")
  }

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to cart!");
  }


  return (
    <div className=" flex flex-col justify-between items-center hover:scale-110 transition-all duration-300 ease-in
     shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] gap-3 mt-10 ml-5    rounded-xl p-4 group ">
      <div className="">
        <p className=" text-gray-700 font-semibold text-lg truncate w-40 mt-1">
          {post.title}
        </p>
      </div>
      <div>
        <p className="text-[10px] w-40 font-normal text-left text-gray-400">
          {post.description.split(" ").slice(0,10).join(" ") + "..."}
        </p>
      </div> 
      <div className="h-[180px]">
        <img src={`${post.image}`}
        className="w-full h-full "
        />
      </div>

      <div className="flex justify-between items-center  w-full mt-5 ">
        <p className=" text-green-600 font-semibold">${post.price}</p>

      <div>
        {
          cart.some((p) => p.id === post.id) ? 
          (
            <button
            onClick={removeFromCart}
            className=" border-2 text-[12px] tracking-wide font-semibold text-gray-700  border-gray-700 uppercase rounded-3xl py-1 px-3
            group-hover:bg-gray-700 group-hover:text-white transition-all duration-200 ease-in"
            >
              Remove Item
            </button>
          ) : 
          (
            <button
            onClick={addToCart}
            className=" border-2 text-[12px] tracking-wide font-semibold text-gray-700  border-gray-700 uppercase rounded-3xl py-1 px-3 
            group-hover:bg-gray-700 group-hover:text-white transition-all duration-200 ease-in"
            >
              Add to Cart
            </button>
          )
        }
      </div>
      </div>
    </div>
  );
};

export default Product;
