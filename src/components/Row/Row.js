import React from 'react';
import { colContainer } from './row.css';
import PropTypes from 'prop-types';

const Row = ({children}) => {
    return <div className={colContainer}>{children}</div>
};

Row.propTypes = { children: PropTypes.node };
export default Row;
