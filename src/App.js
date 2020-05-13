import React from "react";
import { render } from "react-dom"; //use {} if you want to import one specific feature
import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    //continut on next line ()
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

render(
  //render overrides anything that was hard coded in that html area
  <App />,
  document.getElementById("root")
);
