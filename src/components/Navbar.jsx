import {FaShoppingCart} from "react-icons/fa"
import { Link } from "react-router-dom";
import Logo from '../assets/logo.png'
import { useSelector } from "react-redux";


const Navbar = () => {

  const {cart} = useSelector((state) => state);

  return (
    <div className="">
      <nav className=" h-20 max-w-6xl   mx-auto flex items-center justify-between px-2 sm:px-5">
        <Link to={'/'}>
          <img src={Logo} 
            height={70}
            width={172}
          />
        </Link>
        <div className=" flex gap-x-6 items-center ">
          <Link to={'/'} className=" text-white hover:text-green-500 transition-all duration-200 ease-in ">Home</Link>
          <Link to={'/cart'}
          className=" relative "
          >
            <FaShoppingCart fill="white" size={25} className=" hover:fill-green-500 transition-all duration-200 ease-in"/>
            {
              cart.length > 0 &&
              <p className="absolute text-white bg-green-600 w-[20px] h-[20px] text-center text-sm rounded-full -top-1 -right-2 cartNumber"
              >{cart.length}</p>           
            }
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
