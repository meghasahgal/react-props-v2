import "./BaseStats.css";
import "./App.js";
// props = stats, need to destructure the props/stats obj when passing in as arg
const BaseStats = ({ stats, click }) => {
  return (
    <div className="base-stats">
      <h1>BaseStats</h1>
      <button className='sp-stats' onClick={click}>Check Special Stats</button>
      <table>
        <tbody>
          <tr>
            <td>Hit Points</td>
            <td>{stats.hp}</td>
          </tr>
          <tr>
            <td>Attack</td>
            <td>{stats.attack}</td>
          </tr>
          <tr>
            <td>Defense</td>
            <td>{stats.defense}</td>
          </tr>
          <tr>
            <td>Speed</td>
            <td>{stats.speed}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BaseStats;
