import React from 'react';
import { FilterBTN } from '../';

const Species = ({ setSpecies, setPageNumber }) => {
  let species = ["Human", "Alien", "Humanoid", "Poopybutthole", "Mythological", "Unknown", "Disease", "Cronenberg", "Animal", "Robot", "Planet"];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed" type="button"
          data-bs-toggle="collapse" data-bs-target="#collapseTwo"
          aria-expanded="true" aria-controls="collapseTwo"
        > Species </button>
      </h2>
      <div
        id="collapseTwo" className="accordion-collapse collapse"
        aria-labelledby="headingTwo" data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {species.map((item, index) => (
            <FilterBTN
              key={index}
              index={index}
              name="species"
              task={setSpecies}
              setPageNumber={setPageNumber}
              input={item}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Species
