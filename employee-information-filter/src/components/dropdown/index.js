import React, { useState } from "react";
import "./index.css";

function Dropdown({ options, labelText, onChange }) {
  const [selectedOption, setSelectedOption] = useState(labelText);

  const optionChange = (e) => {
    setSelectedOption(e.target.value);
    onChange(e);
  };

  return (
    <div className="elementSet">
      <select 
        onChange={optionChange} 
        data-testid="dropdown" 
        value={selectedOption}
      >
        <option value={labelText} disabled>{labelText}</option>
        {
          options.map((option, index) => (
            <option value={option} key={index}>{option}</option>
          ))
        }
      </select>
    </div>
  );
}

export default Dropdown;
