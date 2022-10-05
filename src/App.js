import Showcase from "./Showcase";
import BaseStats from "./BaseStats";
import "./App.css";

function App() {
  const baseStats = {
    hp: 45,
    attack: 49,
    defense: 49,
    spAttack: 65,
    spDef: 65,
    speed: 45,
  };
  //   There are times where you may want to pass a function as a prop. By doing this, you will be passing a reference to the function in the parent component which may then have some functionality.
  const handleClick = () => {
    alert(
      `Special Stats\n\tSpecial Attack: ${baseStats.spAttack}\n\tSpecial Defense: ${baseStats.spDef}`
    );
  };
  return (
    <div className="main-wrapper background">
      <Showcase />
      {/* pass in stats as prop name with baseStats as value and click is the function we are passing as a prop */}
      <BaseStats stats={baseStats} click={handleClick} />
    </div>
  );
}

export default App;
