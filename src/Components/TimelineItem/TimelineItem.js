import React from 'react';
import TimelineIcon from '../TimelineIcon/TimelineIcon';
import Card from '../Card/Card';
import Kings from "../../kings.js";

const TimelineItem = () => {
    const kingsList = Kings.map(king => <Card king={king} />)
    return (
        <ul>
            <>{kingsList}</>            
        </ul>
    );
}

export default TimelineItem;
