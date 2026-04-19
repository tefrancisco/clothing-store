import { useState, useRef } from "react";
import { motion } from "framer-motion";
import menuIcon from "../assets/menu.svg";
import closeIcon from "../assets/close.svg";
import cartIcon from "../assets/cart.svg";
import Modal from "./Modal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const modal = useRef();

  return (
    <>
      <Modal ref={modal}>
        <div className="w-full h-auto bg-stone-400 flex flex-wrap flex-col justify-center">
          <div className="w-full h-auto flex flex-col">
            <p className="flex justify-between">
              <h1 className="mx-2 my-2 text-2xl">Your cart</h1>
              <form method="dialog" className="mx-2 mt-3">
                <button>
                  <img src={closeIcon} className="w-8" />
                </button>
              </form>
            </p>
            <ul>
              <li className="w-full flex justify-between py-1 border-b-2 border-stone-500">
                <span className="mx-2 text-lg">Baseball cap</span>{" "}
                <p className="mx-2">
                  <button className="p-1 text-lg rounded-lg">-</button>
                  <span className="mx-2 text-lg">0</span>
                  <button className="p-1 text-lg rounded-lg">+</button>
                </p>
              </li>
              
            </ul>
            <p className="text-lg mx-2 my-2">Total: </p>
          </div>
        </div>
      </Modal>

      <div className="w-full h-28 bg-stone-600 flex justify-between items-center font-[Unbounded]">
        <div className="mx-2 md:ml-30">
          <p className="text-4xl sm:text-7xl font-medium">CStore</p>
        </div>
        <div className="flex gap-5 mx-2">
          <button onClick={() => modal.current.open()}>
            <img src={cartIcon} alt="" className="w-9 md:mr-20" />
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
          <li className="py-2 pr-2 border-r">
            <span className="mx-2">Men</span>
          </li>
          <li className="py-2 pr-2 border-r">
            <span className="mx-2">Women</span>
          </li>
          <li className="py-2 pr-2 border-r">
            <span className="mx-2">Footwear</span>
          </li>
          <li className="py-2 pr-2 border-r">
            <span className="mx-2">Accessories</span>
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
              <span className="mx-2">Men</span>
            </li>
            <li className="w-full py-2 border-b-2">
              <span className="mx-2">Women</span>
            </li>
            <li className="w-full py-2 border-b-2">
              <span className="mx-2">Footwear</span>
            </li>
            <li className="w-full py-2 border-b-2">
              <span className="mx-2">Accessories</span>
            </li>
          </ul>
        </motion.div>
      )}
    </>
  );
}
