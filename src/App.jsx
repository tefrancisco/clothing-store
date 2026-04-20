import Navbar from "./components/Navbar";
import Card from "./components/Card";
import {MEN_CLOTHES, WOMEN_CLOTHES, ACCESSORIES, FOOTWEAR} from "./data/DUMMY_CLOTHES";

function App() {

  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center sm:flex-row sm:flex-wrap sm:gap-10">
        {MEN_CLOTHES.map((clothing) => (
          <Card {...clothing} key={clothing.title}/>
        ))}
        {WOMEN_CLOTHES.map((clothing) => (
          <Card {...clothing} key={clothing.title}/>
        ))}
        {ACCESSORIES.map((clothing) => (
          <Card {...clothing} key={clothing.title}/>
        ))}
        {FOOTWEAR.map((clothing) => (
          <Card {...clothing} key={clothing.title}/>
        ))}
      </div>
    </>
  );
}

export default App;
