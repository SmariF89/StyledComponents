import React from 'react';
import styles from './progressbar.css';
import PropTypes from 'prop-types';

const ProgressBar = ({ progress, striped, animated, state }) => {
    if(animated && striped) {
        return (
            <div className={`${styles.progressbarWrapper}`}>
                <div style={{ width: `${progress}%` }} className={`${styles.progressbar} ${styles[state]} ${styles.striped} ${styles.animated}`} />
            </div>
        );
    } else if(animated) {
        return (
            <div className={`${styles.progressbarWrapper}`}>
                <div style={{ width: `${progress}%` }} className={`${styles.progressbar} ${styles[state]} ${styles.animated}`} />
            </div>
        );
    } else if(striped) {
        return (
            <div className={`${styles.progressbarWrapper}`}>
                <div style={{ width: `${progress}%` }} className={`${styles.progressbar} ${styles[state]} ${styles.striped}`} />
            </div>
        );
    } else {
        return (
            <div className={`${styles.progressbarWrapper}`}>
                <div style={{ width: `${progress}%` }} className={`${styles.progressbar} ${styles[state]}`} />
            </div>
        );
    }
};

ProgressBar.propTypes = {
    progress: PropTypes.number.isRequired,
    striped: PropTypes.bool.isRequired,
    animated: PropTypes.bool.isRequired,
    state: PropTypes.oneOf([ 'info', 'success', 'warning', 'danger' ])
};

ProgressBar.defaultProps = {
    progress: 0,
    striped: false,
    animated: false,
    state: 'info'
};

export default ProgressBar;
