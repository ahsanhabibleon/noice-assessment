import React from "react";
import "./select-media-type.scss";

function SelectMediaType({ name, id, values, onChange }) {
  return (
    <label htmlFor={id} className="type-select">
      <select id={id} name={name} onChange={onChange}>
        {values.map((value, index) => (
          <option key={index} value={value.value}>
            {value.title}
          </option>
        ))}
      </select>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 386.257 386.257"
        className="select-icon"
      >
        <path d="m0 96.879 193.129 192.5 193.128-192.5z" />
      </svg>
    </label>
  );
}

export default SelectMediaType;
