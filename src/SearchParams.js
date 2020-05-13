import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";

const SearchParams = () => {
  //const [currentVariable, updatesCurrentVariable] e updates useState
  //useState is a hook -- anything with useBlah is a hook .. all hooks begin with use
  //hooks NEVER go inside if statements or for loops or conditional or unpredictable logic
  //hooks must stay in order
  const [location, setLocation] = useState("Seattle, WA"); //defaultState before update
  const [animal, setAnimal] = useState("dog");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)} //e is variable for event
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option>All</option>
            {ANIMALS.map((animal) => (
              <option value={animal}> {animal} </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
