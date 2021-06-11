import React from "react";
import Nav from "./Nav";
import HogsList from "./HogsList"
import Dropdowns from "./Dropdowns"

import hogs from "../porkers_data";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Dropdowns /> */}
      <HogsList hogs={hogs} />
    </div>
  );
}

export default App;
