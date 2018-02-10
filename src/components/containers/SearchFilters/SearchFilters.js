import React , { Component } from 'react';

import InputField from '../../views/InputField/InputField';
import OptionField from '../../views/DropdownField/DropdownField';
import StarField from '../../views/StarField/StarField';

class SearchFilters extends Component {

    constructor() {
      super();
    }

    render() {
      return (
        <div>
          <InputField />
          <div>
            <OptionField />
            <OptionField />
          </div>
          <StarField />
        </div>
      );
    }
}

export default SearchFilters;
