import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './styles.css';

const DropdownField = (props) => {

  return (
    <select styleName="input" onChange={(e) => props.handleChange(e.target.value)}>
      <option value="" disabled selected>{props.placeholder}</option>
      {props.options.map((option) => {
        return <option key={option.k} value={option.v}>{option.k}</option>
      })}
    </select>
  );
        
}

export default CSSModules(DropdownField, styles);
 