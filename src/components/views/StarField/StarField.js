import React from 'react';
// import moment from 'moment'

// import { Link } from 'react-router-dom';
// import CSSModules from 'react-css-modules';
// import styles from './styles.css';
// import Glyphicon from 'react-bootstrap/lib/Glyphicon'
// import {withRouter} from "react-router-dom";

// let hash = require('object-hash');

const InputField = (props) => {

  return (
    <div>
      <label>
        <input type='checkbox' checked={true} />
        1 star
      </label>
      <label>
        <input type='checkbox' checked={true} />
        2 star
      </label>
      <label>
        <input type='checkbox' checked={true} />
        3 star
      </label>
      <label>
        <input type='checkbox' checked={true} />
        4 star
      </label>
      <label>
        <input type='checkbox' checked={true} />
        5 star
      </label>
    </div>
  );
        
}

export default InputField;
 