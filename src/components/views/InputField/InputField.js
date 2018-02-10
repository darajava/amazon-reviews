import React from 'react';

const InputField = (props) => {

  return (
    <input value={props.term} onChange={(e) => props.handleChange(e.target.value)} />
  );
        
}

export default InputField;
 