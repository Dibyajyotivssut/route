import { useDispatch, useSelector } from "react-redux";
import { add, remove} from "../redux/Slices/cartSlice";
import toast from "react-hot-toast";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const removeitem = () => {
    dispatch(remove(post.id));
    toast.success("product in removed");
  };
  const additem = () => {
    dispatch(add(post));
    toast.success("added in cart")
  };
  return (
    <div className="flex flex-col items-center justify-between hover:scale-110 trasition duration-300 ease-in gap-3 mt-10 ml-5 rounded-xl outline">
      <div>
        <p className=" text-gray-700 text-lg text-left mt-1">{post.title}</p>
      </div>
      <div>
        <p className="w-40 text-gray-400 text-[10px] text-left ">
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[180px]">
        <img className="h-full w-full" src={post.image} alt="" />
      </div>
      <div className="flex justify-between gap-14">
        <p className="text-green-400 font-semibold"> ${post.price}</p>
        <div>
          {cart.some((p) => p.id === post.id) ? (
            <button
              className=" text-gray-700 border-2 border-gray-700 rounded-full text-[12px] p-1 px-3 hover:bg-gray-700 hover:text-white"
              onClick={removeitem}
            >
              remove
            </button>
          ) : (
            <button
              className=" text-gray-700 border-2 border-gray-700 rounded-full text-[12px] p-1 px-3 hover:bg-gray-700 hover:text-white"
               onClick={additem}
            >
              add too cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
