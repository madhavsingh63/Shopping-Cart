import {MdDelete} from 'react-icons/md'
import {  remove } from "../redux/Slices/CartSlice";
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';



const CartItem = ({item, itemIndex}) => {

  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from cart!");

  }

  return (
    <div className='w-[100%]   flex flex-col md:flex-row justify-between items-center pt-2 md:pt-5 pb-3 md:pb-7 mb-3 md:mb-7 mx-2 md:px-5 md:gap-x-14 gap-y-5  border-slate-500  border-b-2'>
    

      <div className='w-[30%]'>
        <img src={item.image}
         className='h-full w-full'
        />
      </div>

      <div className='md:w-[370px]  '>
        <p className='text-xl text-gray-700 font-semibold'>{item.title}</p>
        <p className='mt-[20px] text-slate-700'>{item.description.split(" ").slice(0,15).join(" ") + "..."}</p>
        <div className='flex w-full justify-between items-center mt-5'>
          <p className="text-green-600 text-[1.15rem] font-bold">${item.price}</p>
          <button
          onClick={removeFromCart}
          className='p-3 rounded-full bg-red-200 mr-3 group hover:bg-red-400 '
          >
            <MdDelete fill='#740000' 
              className='group-hover:fill-white'
            />
          </button>
        </div>
      </div>

    </div>
  );
};

export default CartItem;
