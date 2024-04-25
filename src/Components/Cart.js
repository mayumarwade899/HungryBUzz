import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../Utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

//   const store = useSelector((store) => store);
//   const cartItems = store.cart.items;


  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="mb-[100%] text-center">
      <h1 className="text-2xl font-bold m-3">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="m-2 p-2 bg-slate-900 text-white rounded-md font-semibold text-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <div className="text-2xl my-3">
            <h1>Your Cart is empty😶</h1>
            <h1>Lets add something😋!!!</h1>
          </div>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
