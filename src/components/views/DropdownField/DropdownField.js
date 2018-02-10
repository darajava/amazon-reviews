import React from 'react';
// import moment from 'moment'

// import { Link } from 'react-router-dom';
// import CSSModules from 'react-css-modules';
// import styles from './styles.css';
// import Glyphicon from 'react-bootstrap/lib/Glyphicon'
// import {withRouter} from "react-router-dom";

// let hash = require('object-hash');

const DropdownField = (props) => {

  return (
    <select onChange={(e) => props.handleChange(e.target.value)}>
      <option value="" disabled selected>{props.placeholder}</option>
      {props.options.map((option) => {
        return <option value={option.v}>{option.k}</option>
      })}
    </select>
  );
        
}

export default DropdownField;
 