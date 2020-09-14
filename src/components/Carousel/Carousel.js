import React from 'react';
import styles from './Carousel.css';
import PropTypes from 'prop-types';


class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: props.size,
      images: props.images,
      index: 0
    }
  }

  clickPrev() {
    var prevIndex = this.state.index -1;
    if (this.props.images[prevIndex]) {
      this.setState({
        index: this.state.index - 1
      });
    }
  };

  clickNext() {
    var nextIndex = this.state.index + 1;
    if (this.props.images[nextIndex]) {
      this.setState({
        index: this.state.index + 1
      });
    }
  }

  render() {
    const {index, images, size} = this.state;
    return (
        <div className={`${styles.carousel} ${styles[`carousal-${size}`]}`}>
          <div className={`${styles.gridItemImg}`} style={{backgroundImage: `url(${images[index]})`, backgroundSize: `cover` }}></div>
          <button className={`${styles.gridItemPrev}`} onClick={() => this.clickPrev()}>&#x2190;</button>
          <button className={`${styles.gridItemNext}`} onClick={() => this.clickNext()}>&#x2192;</button>
        </div>
    )
  }
}

Carousel.propTypes = {
    images: PropTypes.array.isRequired,
    size: PropTypes.oneOf(['small','medium','large'])
    //size: PropTypes.string.isRequired,
};

Carousel.defaultProps = {
  size:'medium'
};

export default Carousel;
