import React, { useState } from "react";
import Nav from "./Nav";
import HogsList from "./HogsList"
import Dropdowns from "./Dropdowns"

import hogs from "../porkers_data";

function App() {
  const [greased, setGreased] = useState("all");

  return (
    <div className="App">
      <Nav />
      <Dropdowns setGreased={setGreased} />
      <hr/>
      <HogsList hogs={hogs} greased={greased} />
    </div>
  );
}

export default App;
