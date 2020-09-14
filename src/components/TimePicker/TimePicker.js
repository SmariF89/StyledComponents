import React from 'react';
import PropTypes from 'prop-types';
import styles from './timepicker.css';

class TimePicker extends React.Component {
    componentDidMount() {
        const { format } = this.props;

        let now = new Date();
        if(format === 12) {
            if(now.getHours() >= 0 && now.getHours() < 12) {
                this.setState({M: 'AM'});
            } else {
                this.setState({M: 'PM'});
            }
            this.setState({selectedHour: (now.getHours() - 12)});
            this.setState({selectedMinute: now.getMinutes()});
        } else {
            this.setState({selectedHour: now.getHours()});
            this.setState({selectedMinute: now.getMinutes()});
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            selectedHour: '',
            selectedMinute: '',
            M: 'PM',
            hourId: this.idHash(),
            minuteId: this.idHash(),
            milHourId: this.idHash(),
            milMinuteId: this.idHash(),
            radioPMId: this.idHash(),
            radioAMId: this.idHash()
        };

        // These are used to uniquely identify the spinner buttons.
        this.hourUp = null;
        this.hourDown = null;
        this.minuteUp = null;
        this.minuteDown = null;
        this.milHourUp = null;
        this.milHourDown = null;
        this.milMinuteUp = null;
        this.milMinuteDown = null;
    }

    assemble(std) {
        const { selectedHour, selectedMinute, M } = this.state;

        if (parseInt(selectedHour, 10) < 10 && parseInt(selectedMinute, 10) < 10) {
            if(std) { return '0' + selectedHour + ':0' + selectedMinute + " " + M; }
            else    { return '0' + selectedHour + ':0' + selectedMinute; }
        } else if (parseInt(selectedHour, 10) < 10 && parseInt(selectedMinute, 10) >= 10) {
            if(std) { return '0' + selectedHour + ':' + selectedMinute + " " + M; }
            else    { return '0' + selectedHour + ':' + selectedMinute; }
        } else if (parseInt(selectedHour, 10) >= 10 && parseInt(selectedMinute, 10) < 10) {
            if(std) { return selectedHour + ':0' + selectedMinute + " " + M; }
            else    { return selectedHour + ':0' + selectedMinute; }
        } else {
            if(std) { return selectedHour + ':' + selectedMinute + " " + M; }
            else    { return selectedHour + ':' + selectedMinute; }
        }
    }

    spinChange(id, hour, plus) {
        let spinner = document.getElementById(id);
        if(plus) {
            spinner.stepUp(1);
        } else {
            spinner.stepDown(1);
        }

        if(hour) {
            this.setState({selectedHour: spinner.value});
        } else {
            this.setState({selectedMinute: spinner.value});
        }
    }

    idHash() {
        const alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let result = "";
        for (var i = 0; i < 8; i++)
            result += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        return result;
    }

    render() {
        const { onTimePick, format } = this.props;
        const { hourId, minuteId, milHourId, milMinuteId, radioAMId, radioPMId } = this.state;
        if(format === 12) {
            return (
                <div className={`${styles.timePickerWrapper}`}>
                    <div>
                        <a ref={elem => this.hourUp = elem} onClick={() => this.spinChange(this.hourUp.nextSibling.id, true, true)}><img className={`${styles.cursor}`} src={require("../../content/up.png")} alt="Up" /></a>
                        <input id={hourId} className={`${styles.spinner}`} onChange={(e) => this.setState({selectedHour: e.target.value})} type="number" min="1" max="12" value={this.state.selectedHour} disabled />
                        <a ref={elem => this.hourDown = elem} onClick={() => this.spinChange(this.hourDown.previousSibling.id, true, false)}><img className={`${styles.cursor}`} src={require("../../content/down.png")} alt="Down" /></a>
                    </div>
                    <div className={`${styles.separator}`}>:</div>
                    <div>
                        <a ref={elem => this.minuteUp = elem} onClick={() => this.spinChange(this.minuteUp.nextSibling.id, false, true)}><img className={`${styles.cursor}`} src={require("../../content/up.png")} alt="Up" /></a>
                        <input id={minuteId} className={`${styles.spinner}`} onChange={(e) => this.setState({selectedMinute: e.target.value})} type="number" min="0" max="59" value={this.state.selectedMinute} disabled />
                        <a ref={elem => this.minuteDown = elem} onClick={() => this.spinChange(this.minuteDown.previousSibling.id, false, false)}><img className={`${styles.cursor}`} src={require("../../content/down.png")} alt="Down" /></a>
                    </div>
                    <div>
                        <input className={`${styles.bullet}`} id={radioAMId} type="radio" name={radioAMId} value="AM" onChange={() => this.setState({M: 'AM'})} />
                        <label className={`${styles.bulletLabel}`} htmlFor={radioAMId}>AM</label>
                        <input className={`${styles.bullet}`} id={radioPMId} type="radio" name={radioAMId} value="PM" onChange={() => this.setState({M: 'PM'})} defaultChecked={this.state.M} />
                        <label className={`${styles.bulletLabel}`} htmlFor={radioPMId}>PM</label>
                    </div>
                    <button className={`${styles.setBtn}`} onClick={() => onTimePick(this.assemble(true))}>&#10004;</button>
                </div>
            );
        } else {
            return (
                <div className={`${styles.timePickerWrapper}`}>
                    <div>
                        <a ref={elem => this.milHourUp = elem} onClick={() => this.spinChange(this.milHourUp.nextSibling.id, true, true)}><img className={`${styles.cursor}`} src={require("../../content/up.png")} alt="Up" /></a>
                        <input id={milHourId} className={`${styles.spinner}`} onChange={(e) => this.setState({selectedHour: e.target.value})} type="number" min="0" max="23" value={this.state.selectedHour} disabled />
                        <a ref={elem => this.milHourDown = elem} onClick={() => this.spinChange(this.milHourDown.previousSibling.id, true, false)}><img className={`${styles.cursor}`} src={require("../../content/down.png")} alt="Down" /></a>
                    </div>
                    <div className={`${styles.separator}`}>:</div>
                    <div>
                        <a ref={elem => this.milMinuteUp = elem} onClick={() => this.spinChange(this.milMinuteUp.nextSibling.id, false, true)}><img className={`${styles.cursor}`} src={require("../../content/up.png")} alt="Up" /></a>
                        <input id={milMinuteId} className={`${styles.spinner}`} onChange={(e) => this.setState({selectedMinute: e.target.value})} type="number" min="0" max="59" value={this.state.selectedMinute} disabled />
                        <a ref={elem => this.milMinuteDown = elem} onClick={() => this.spinChange(this.milMinuteDown.previousSibling.id, false, false)}><img className={`${styles.cursor}`} src={require("../../content/down.png")} alt="Down" /></a>
                    </div>
                    <button className={`${styles.milSetBtn}`} onClick={() => onTimePick(this.assemble(false))}>&#10004;</button>
                </div>
            );
        }
    }
};

TimePicker.propTypes = {
    onTimePick: PropTypes.func.isRequired,
    format: PropTypes.oneOf([ 12, 24 ])
};

TimePicker.defaultProps = {
    format: 24
};

export default TimePicker;
