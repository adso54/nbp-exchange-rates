import React from 'react';

import Rate from '../rate/rate.component';

import './rate-list.styles.scss';


const RateList = props => (
    <div className='rate-list'>
        {props.rates.map(rate => (
            <Rate className='rate' rate={rate}/>
        ))}
    </div>
)
export default RateList;