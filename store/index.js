import { createStore } from "redux";

function cartReducer(state = {selectedCategory: "men",items: []}, action) {

  let existingCartItemIndex = null;

  if (action.item) {
    existingCartItemIndex = state.items.findIndex(
    (item) => item.name === action.item.name,
  );
  }

  if (action.type == "add") {
    if (existingCartItemIndex > -1) {
      return {
        ...state,
        items: state.items.map((item, index) =>
          index === existingCartItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      };
    } else {
      return {
        ...state,
        items: [...state.items, { ...action.item, quantity: 1 }]
      };
    }
  } 
  
  else if (action.type == "remove") {
    if (state.items[existingCartItemIndex].quantity === 1) {
      return {
        ...state,
        items: state.items.filter((_, index) => index !== existingCartItemIndex)
      };
    } else {
      return {
        ...state,
        items: state.items.map((item, index) =>
          index === existingCartItemIndex
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      };
    }
  }

  else if (action.type == "changeCategory") {
    return {
      ...state,
      selectedCategory: action.category
    };
  }

  return state;
}

const store = createStore(cartReducer);

export default store;
