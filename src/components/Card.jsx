import { useSelector, useDispatch } from "react-redux";

export default function Card({ image, title, price }) {

const dispatch = useDispatch();

function addItemToCart(name, price) {
    dispatch({
      type: "add",
      item: {
        name,
        price: price
      },
    });
  }

function removeItemFromCart(name) {
    dispatch({
      type: "remove",
      item: {
        name,
        price: price
      }
    })
  }


  const cart = useSelector(state => state.items);
  const imagePath = `./src/assets/${image}`;

  return (
    <div className="flex flex-col w-89 h-110 my-10">
      <figure className="w-full h-[80%] flex items-center justify-center">
        <img src={imagePath} alt={title} className="max-w-full max-h-full" />
      </figure>
      <div className="grid grid-cols-2 w-full h-[20%]">
        <div className="font-mono">
          <p className="py-3">{title}</p>
          <p>{`$ ${price} USD`}</p>
        </div>
        <div className="flex items-center justify-end">
          <button 
          onClick={() => addItemToCart(title, price)}
          className="font-mono py-3 px-4 mx-1 border border-stone-800 hover:cursor-pointer">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
