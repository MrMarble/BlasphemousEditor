import React, { useEffect, useState } from "react";
import "./App.css";
import { Map } from "./Map/Map";
import save from "./mimapa.json";
function App() {
  return (
    <div>
      <Map rooms={save}></Map>
    </div>
  );
}

export default App;
