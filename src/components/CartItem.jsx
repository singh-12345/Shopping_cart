import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";

import { MdDelete } from "react-icons/md";


const CartItem = ({item,itemIndex}) => {
 
  const dispatch=useDispatch();

  const removeFromCart = () => {
    dispatch (remove(item.id));
   toast.success("Item Removed")
  }

  return (
    <div className="">

      <div className="flex flex-row mt-10 ml-80 border-solid border-b-2 border-gray-500 pb-6 ">
        
       

        <div className="h-[200px] w-[200px] ">
        <img src={item.image} className="h-full "/>
        </div>

      <div className="ml-10 ">
        <h1 className="text-gray-700 font-semibold  max-w-80 ">{item.title}</h1>
        <h1 className="w-80 text-gray-400 font-normal text-[13px] mt-4">{item.description.split(" ").slice(0,15).join(" ") + "..."}</h1>

        <div className="flex gap-20 mt-5 justify-between utility">
          <p className="text-green-600 font-semibold">${item.price}</p>
          <div className="ml-5 border-4 rounded-full bg-gray-300"
            onClick = {removeFromCart}>
              < MdDelete/>
              </div>

      
       
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
