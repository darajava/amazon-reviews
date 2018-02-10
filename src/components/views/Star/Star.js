import React from 'react';

const StarField = (props) => {
  return (
    <span>
      <label>
        <input value={props.value} type='checkbox' checked={props.checked} onChange={(e) => props.handleChange(e.target.value)} />
        {props.value} star
      </label>
    </span>
  );
        
}

export default StarField;
 