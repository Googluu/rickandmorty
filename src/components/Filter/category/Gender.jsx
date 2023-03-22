import React from 'react';
import { FilterBTN } from '../';

const Gender = ({ setGender, setPageNumber }) => {
  let genders = ["Female", "Male", "Genderless", "Unknown"]
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button collapsed" type="button"
          data-bs-toggle="collapse" data-bs-target="#collapseThree"
          aria-expanded="true" aria-controls="collapseThree"
        > Gender </button>
      </h2>
      <div
        id="collapseThree" className="accordion-collapse collapse"
        aria-labelledby="headingThree" data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {genders.map((item, index) => (
            <FilterBTN
              key={index}
              index={index}
              name="gender"
              task={setGender}
              setPageNumber={setPageNumber}
              input={item}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gender
