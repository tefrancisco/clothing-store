import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import menuIcon from "../assets/menu.svg";
import closeIcon from "../assets/close.svg";
import cartIcon from "../assets/cart.svg";
import Modal from "./Modal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const modal = useRef();

  const cart = useSelector(state => state.items);
  const selectedCategory = useSelector((state) => state.selectedCategory);
  const dispatch = useDispatch()

  function removeItemFromCart(name) {
    dispatch({
      type: "remove",
      item: {
        name: name
      }
    })
  }

  let totalAmount = 0;

  for(let i = 0; i < cart.length; i++)
  {
    totalAmount += cart[i].price * cart[i].quantity
  }

  return (
    <>
      <Modal ref={modal}>
        <div className="w-full h-auto bg-stone-400 flex flex-wrap flex-col justify-center font-[Unbounded]">
          <div className="w-full h-auto flex flex-col">
            <p className="flex justify-between">
              <span className="mx-2 my-2 text-2xl">Your cart</span>
                <button onClick={() => modal.current.close()}>
                  <img src={closeIcon} className="w-8 hover:cursor-pointer" />
                </button>
            </p>
            <ul>
              {cart.map((item) => (
                <li key={item.name} className="w-full flex justify-between py-1 border-b-2 border-stone-500 font-mono">
                  <span className="mx-2 text-lg">{item.name}</span>{" "}
                  <p className="mx-2">
                    <button 
                    onClick={() => removeItemFromCart(item.name)}
                    className="p-1 text-lg rounded-lg">-</button>
                    <span className="mx-2 text-lg font-[Unbounded]">{item.quantity}</span>
                    <button 
                    onClick={() => dispatch({ type: "add", item: {
                      name: item.name,
                      price: item.price
                    }})}
                    className="p-1 text-lg rounded-lg">+</button>
                  </p>
                </li>
              ))}
            </ul>
            <p className="text-lg mx-2 my-2 font-mono">Total: $ {totalAmount}.00</p>
          </div>
        </div>
      </Modal>

      <div className="w-full h-28 bg-stone-600 flex justify-between items-center font-[Unbounded]">
        <div className="mx-2 md:ml-30">
          <p className="text-4xl sm:text-7xl font-medium">CStore</p>
        </div>
        <div className="flex gap-5 mx-2">
          <button onClick={() => modal.current.open()}>
            <img src={cartIcon} alt="" className="w-9 md:mr-20 hover:cursor-pointer" />
          </button>

          <motion.button
            className="sm:hidden"
            onClick={() => setIsOpen((prevValue) => !prevValue)}
            animate={{
              rotate: isOpen ? 180 : 0,
            }}
          >
            <img src={isOpen ? closeIcon : menuIcon} alt="" className="w-10" />
          </motion.button>
        </div>
      </div>
      <div className="w-full min-h-15 sm:flex items-center bg-stone-400 hidden">
        <ul className="text-xl hidden flex-row sm:flex gap-10 md:ml-30">
          <li className={`py-2 pr-2 border-r hover:cursor-pointer ${selectedCategory === "men" && `text-white border-white`}`}>
            <span 
            onClick={() => dispatch({ type: "changeCategory", category: "men" })}
            className="mx-2">Men</span>
          </li>
          <li className={`py-2 pr-2 border-r hover:cursor-pointer ${selectedCategory === "women" && `text-white border-white`}`}>
            <span 
            onClick={() => dispatch({ type: "changeCategory", category: "women" })}
            className="mx-2">Women</span>
          </li>
          <li className={`py-2 pr-2 border-r hover:cursor-pointer ${selectedCategory === "footwear" && `text-white border-white`}`}>
            <span 
            onClick={() => dispatch({ type: "changeCategory", category: "footwear" })}
            className="mx-2">Footwear</span>
          </li>
          <li className={`py-2 pr-2 border-r hover:cursor-pointer ${selectedCategory === "accessories" && `text-white border-white`}`}>
            <span 
            onClick={() => dispatch({ type: "changeCategory", category: "accessories" })}
            className="mx-2">Accessories</span>
          </li>
        </ul>
      </div>
      {isOpen && (
        <motion.div
          className="w-full h-auto bg-stone-400"
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
        >
          <ul className="text-xl">
            <li className="w-full py-2 border-b-2">
              <span 
              onClick={() => dispatch({ type: "changeCategory", category: "men" })}
              className="mx-2">Men</span>
            </li>
            <li className="w-full py-2 border-b-2">
              <span 
              onClick={() => dispatch({ type: "changeCategory", category: "women" })}
              className="mx-2">Women</span>
            </li>
            <li className="w-full py-2 border-b-2">
              <span 
              onClick={() => dispatch({ type: "changeCategory", category: "footwear" })}
              className="mx-2">Footwear</span>
            </li>
            <li className="w-full py-2 border-b-2">
              <span 
              onClick={() => dispatch({ type: "changeCategory", category: "accessories" })}
              className="mx-2">Accessories</span>
            </li>
          </ul>
        </motion.div>
      )}
    </>
  );
}
