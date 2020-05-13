import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  //const [currentVariable, updatesCurrentVariable] e updates useState
  //useState is a hook -- anything with useBlah is a hook .. all hooks begin with use
  //hooks NEVER go inside if statements or for loops or conditional or unpredictable logic
  //hooks must stay in order
  const [location, setLocation] = useState("Seattle, WA"); //defaultState before update
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);

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
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
