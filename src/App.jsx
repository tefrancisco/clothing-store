import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import {
  MEN_CLOTHES,
  WOMEN_CLOTHES,
  ACCESSORIES,
  FOOTWEAR,
} from "./data/DUMMY_CLOTHES";

function App() {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.selectedCategory);

  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center sm:flex-row sm:flex-wrap sm:gap-10">
        {selectedCategory === "men" &&
          MEN_CLOTHES.map((clothing) => (
            <Card {...clothing} key={clothing.title} />
          ))}
        {selectedCategory === "women" && 
        WOMEN_CLOTHES.map((clothing) => (
          <Card {...clothing} key={clothing.title} />
        ))}
        {selectedCategory === "accessories" && 
        ACCESSORIES.map((clothing) => (
          <Card {...clothing} key={clothing.title} />
        ))}
        {selectedCategory === "footwear" &&
        FOOTWEAR.map((clothing) => (
          <Card {...clothing} key={clothing.title} />
        ))}
      </div>
    </>
  );
}

export default App;
