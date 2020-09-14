import React from 'react';
import { colFrame } from './col.css';

const Col  = ({ size }) => {
    if(size > 12) { size = 12 }
    return (
        <div style={{ width: `${(size/12.6)*100}%` }} className={`${colFrame}`}>
        </div>
    );
};

Col.propTypes = {
    size: (props, propName) => {
        if (props[propName] >= 1 && props[propName] <= 12) { return; }
        return new Error('Column size should be between 1 and 12');
    },
};
Col.defaultProps = { size: 1 };

export default Col;
