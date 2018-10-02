import React from 'react';
import WeeklyItem from './WeeklyItem.jsx'

import './styles.css';

const WeklyList = data  => {
    return (
    <div className="WeaklyListCont">
        <WeeklyItem data={data}/> 
    </div>
    )};

export default WeklyList;