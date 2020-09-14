import React from 'react';

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDay: 1
        };
    }
    handleInput(nextNumber, maximum) {
        // Logic
        if (nextNumber >= maximumDay && nextNumber < 0) {
            this.setState({ currentDay: nextNumber });
        }
    }
    render() {
        const { currentDay } = this.state;
        return (
            <div>
                <a href="" onClick={() => this.handleInput(currentDay + 1)}></a>
                <input type="text" value={ currentDay } />
                <a href="" onClick={() => this.handleInput(currentDay - 1)}></a>
            </div>
        );
    }
};

export default Test;
