import { createContext, useEffect, useReducer } from "react";

export const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      // expects an object in action.payload
      return { ...state, items: [...state.items, action.payload] };
    case "REMOVE_ITEM":
      // expects an ID in action.payload
      const newItems = state.items.filter((item) => item.id !== action.payload);
      return { ...state, items: newItems };
    case "TOTAL":
      return { ...state, total: action.payload };
    default:
      return state;
  }
};

function calculateTotal(items) {
  // items is an array of object
  let total = 0;
  items.forEach((item) => {
    total += item.price;
  });
  return total;
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 });

  // recalculate total when items in cart changes
  useEffect(() => {
    dispatch({ type: "TOTAL", payload: calculateTotal(state.items) });
    // console.log("cart context sideeffect");
  }, [state.items]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
