import React from 'react';
import styles from './Tab.css';
import PropTypes from 'prop-types';

const Tab = ({ selectionKey, title, children, Layout, Theme}) => {

    return (
        <div className={`${styles[`tabcontent-${Layout}`]} ${styles[`${Theme}`]}`}>
            <h3>{title}</h3>
            <p>{children}</p>
        </div>
    );
}

Tab.propTypes = {
    selectionKey : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired
};

export default Tab;
