import React from 'react';

import './search-rate.styles.scss';

const SearchRate = props => (
    <div>
        <input onChange={props.onSearchChange}></input>
        <label>Search rate</label>
    </div>
)

export default SearchRate;