import React from "react";
import { render } from "react-dom"; //use {} if you want to import one specific feature
import Pet from "./Pet";

const App = () => {
  return React.createElement(
    "div", //what kind of element
    { id: "comething-important" }, //here is where the attributes would go ex. id = "whatever"
    [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, {
        name: "Luna",
        animal: "Dog",
        breed: "Havenese",
      }),
      React.createElement(Pet, {
        name: "Pepper",
        animal: "Bird",
        breed: "Cockatiel",
      }),
      React.createElement(Pet, {
        name: "Doink",
        animal: "Cat",
        breed: "Mixed",
      }),
    ] //child of element (div) to be passed with parameters
  );
};

render(
  //render overrides anything that was hard coded in that html area
  React.createElement(App),
  document.getElementById("root")
);
