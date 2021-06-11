import React, { useState } from "react";
import Nav from "./Nav";
import HogsList from "./HogsList"
import Dropdowns from "./Dropdowns"

import hogs from "../porkers_data";

function App() {
  const [greased, setGreased] = useState("all");
  const [sortBy, setSortBy] = useState("name");

  return (
    <div className="App">
      <Nav />
      <Dropdowns setGreased={setGreased} setSortBy={setSortBy} />
      <hr/>
      <HogsList hogs={hogs} greased={greased} sortBy={sortBy} />
    </div>
  );
}

export default App;
