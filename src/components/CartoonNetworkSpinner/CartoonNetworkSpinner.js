import React from 'react';
import PropTypes from 'prop-types';
import styles, { cartoonNetworkSpinner } from './cartoonNetworkSpinner.css'

const imgArr = ["https://www.dominos.is/media/1133/media-6986-nelson.jpg?width=400&format=jpg&quality=50&bgcolor=fff",
                "https://www.dominos.is/media/1133/media-6986-nelson.jpg?width=400&format=jpg&quality=50&bgcolor=fff",
                "https://www.dominos.is/media/1132/media-6985-prinsessan.jpg?width=400&format=jpg&quality=50&bgcolor=fff",
                "https://www.dominos.is/media/1067/media-6920-festival1.png?width=400&format=jpg&quality=50&bgcolor=fff",
                "https://www.dominos.is/media/1038/media-6891-caliente0.png?width=400&format=jpg&quality=50&bgcolor=fff",
                "https://www.dominos.is/media/1098/media-6951-dominos_surprise.png?width=400&format=jpg&quality=50&bgcolor=fff",
                "https://www.dominos.is/media/1003/media-6856-prima.jpg?width=400&format=jpg&quality=50&bgcolor=fff"];

class CartoonNetworkSpinner extends React.Component {
    componentDidMount() {
        setInterval(() => {
            if(this.state.shouldDisplay === 'spinThat') {
                if(this.state.imgIndex === imgArr.length - 1) { this.setState({imgIndex: 0}) }
                else { this.setState({imgIndex: this.state.imgIndex + 1}) }
                this.setState({shouldDisplay: ''})
            }else { this.setState({shouldDisplay: 'spinThat'}) }
        }, (((this.props.interval + 2) / 2) * 1000));
    };

    constructor(props) {
        super(props);
        this.state = {
            imgIndex: 0,
            shouldDisplay: ''
        };
    };

    render() {
        return <div style={{ backgroundImage: `url(${imgArr[this.state.imgIndex]})`}} className={`${cartoonNetworkSpinner} ${styles[this.state.shouldDisplay]}`}></div>
    };
};

CartoonNetworkSpinner.propTypes = { interval: PropTypes.number.isRequired };
CartoonNetworkSpinner.defaultProps = { interval: 3 };

export default CartoonNetworkSpinner;
