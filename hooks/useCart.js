import { CartContext } from "../context/cart";
import { useContext } from "react";

function useCart() {
  const { state, dispatch } = useContext(CartContext);

  return { ...state, dispatch };
}
export default useCart;
