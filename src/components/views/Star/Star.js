import React from 'react';
import CSSModules from 'react-css-modules';
import Glyphicon from 'react-bootstrap/lib/Glyphicon'

import styles from './styles.css';

const StarField = (props) => {
  return (
    <span>
      <label styleName="container">
        <input
          value={props.value}
          type='checkbox'
          checked={props.checked}
          onChange={(e) => props.handleChange(e.target.value)}
        />
        <span styleName="checkmark"></span>
        {props.value} <Glyphicon glyph="star" />
      </label>


    </span>
  );
        
}

export default CSSModules(StarField, styles);
 