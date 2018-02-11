import React from 'react';

const DropdownField = (props) => {

  return (
    <select onChange={(e) => props.handleChange(e.target.value)}>
      <option value="" disabled selected>{props.placeholder}</option>
      {props.options.map((option) => {
        return <option key={option.k} value={option.v}>{option.k}</option>
      })}
    </select>
  );
        
}

export default DropdownField;
 