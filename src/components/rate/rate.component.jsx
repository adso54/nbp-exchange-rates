import React from 'react';

import './rate.styles.scss';

const Rate = props => (
    <div className = 'rate'>
        <h1>{props.rate.currency} ({props.rate.code})</h1>   
        <h2>{props.rate.mid}</h2>
    </div>
)

export default Rate;