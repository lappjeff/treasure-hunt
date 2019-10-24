import React from "react";
import traverseMap from "./helpers/traverseMap";
import { generatePath, movePlayerToDestination } from "./helpers/util";
import Sidebar from "./components/sidebar/Sidebar.js";
import Map from "./components/map/Map.js";

function App() {
  return (
    <div className="App">
      <h1 className="title">Treasure Hunter</h1>
      <section className="main-section">
        <Map />
        <Sidebar />
      </section>

      <header className="App-header">Maze</header>
    </div>
  );
}

export default App;
