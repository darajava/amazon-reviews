import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './styles.css';

const InputField = (props) => {

  return (
    <input placeholder="Search..." styleName='input' value={props.term} onChange={(e) => props.handleChange(e.target.value)} />
  );
        
}

export default CSSModules(InputField, styles);
 