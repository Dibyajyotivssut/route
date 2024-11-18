import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
const CartItem = ({ item }) => {
  const dispatch=useDispatch();
  const removeitem=()=>{
    dispatch(remove(item.id))
  }
  return (
    <div className="flex items-center mt-10 ml-5 border-b-2 pb-2 border-blue-950  ">
      <div className="h-[180px]">
        <img className="h-full w-full mr-3" src={item.image} alt="" />
      </div>
      <div>
        <p className="text-[25px] font-semibold">{item.title}</p>
        <h1 className="w-60 text-[15px]">
          {item.description.split(" ").slice(0, 10).join(" ") + "..."}
        </h1>
        <div>
          <p>{item.price}</p>
        </div>
        <button onClick={removeitem}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
