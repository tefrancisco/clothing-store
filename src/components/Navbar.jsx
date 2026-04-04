import { useState } from "react";
import { motion } from "framer-motion";
import menuIcon from "../assets/menu.svg";
import closeIcon from "../assets/close.svg";
import cartIcon from "../assets/cart.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full h-28 bg-stone-600 flex justify-between items-center font-[Unbounded]">
        <div className="mx-2 md:ml-30">
          <p className="text-4xl sm:text-7xl font-medium">CStore</p>
        </div>
        <div className="flex gap-5 mx-2">
          <img src={cartIcon} alt="" className="w-9 md:mr-20" />

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
