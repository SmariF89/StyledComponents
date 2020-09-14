import React from 'react';
import styles from './nameCard.css';
import PropTypes from 'prop-types';

const NameCard = ({ name, email, telephone, imageUrl }) => {
    return (
        <div className={`${styles.nameCard}`}>
            <img src={imageUrl} className={`${styles.gridItemImg}`} alt="Avatar" />
            <div>
                <p className={`${styles.gridItemName}`}> {name}</p>
                <a href={`mailto:${email}`} className={`${styles.gridItemEmail}`}>&#x2709; {email}</a>
                <p className={`${styles.gridItemTel}`}>&#x260E; {telephone}</p>
            </div>
        </div>
    );
};

NameCard.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    telephone: PropTypes.string.isRequired
};

NameCard.defaultProps = {
    name: 'John Doe',
    email: 'example@example.com',
    telephone: '000-0000',
    imageUrl: 'http://cdn.onlinewebfonts.com/svg/download_405324.png'
};

export default NameCard;
