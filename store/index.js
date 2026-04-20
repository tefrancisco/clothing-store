import { createStore } from "redux";

function cartReducer(state = [], action) {
  const existingCartItemIndex = state.findIndex(
    (item) => item.name === action.item.name,
  );

  if (action.type == "add") {
    if (existingCartItemIndex > -1) {
      state[existingCartItemIndex].quantity++;
    } else {
      state.push({ ...action.item, quantity: 1 });
    }
  } 
  
  else if (action.type == "remove") {
    if (state[existingCartItemIndex].quantity === 1) {
        state.splice(existingCartItemIndex, 1);
    }
    else {
        state[existingCartItemIndex].quantity--;
    }
  }

  return [...state];
}

const store = createStore(cartReducer);

export default store;
