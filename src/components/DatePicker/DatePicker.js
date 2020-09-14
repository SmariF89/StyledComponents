import React from 'react';
import PropTypes from 'prop-types';
import styles from './datePicker.css';

class DatePicker extends React.Component {
    componentDidMount() {
        let today = new Date();
        this.setState({selectedYear: today.getFullYear(),
                       selectedMonth: today.getMonth() + 1,
                       selectedDay: today.getDate()
        });
        this.daysOfMonth();
    }

    constructor(props) {
        super(props);
        let today = new Date();
        this.state = {
            selectedYear: today.getFullYear(),
            selectedMonth: today.getMonth() + 1,
            selectedDay: today.getDate(),
            firstDayOfMonth: 0,
            lastDayOfMonth: 0,
            yearId: this.idHash(),
            monthId: this.idHash(),
            dayId: this.idHash()
        };

        // These are used to uniquely identify the spinner buttons.
        this.dayUp = null;
        this.dayDown = null;
        this.monthUp = null;
        this.monthDown = null;
        this.yearUp = null;
        this.yearDown = null;
    }

    spinChange(id, type, plus) {
        let spinner = document.getElementById(id);
        if(plus) { spinner.stepUp(1);   }
        else     { spinner.stepDown(1); }
        switch(type) {
            case 'DAY':
                this.setState({selectedDay: parseInt(spinner.value, 10)},
                    function () {
                        this.daysOfMonth();
                    });
                break;
            case 'MONTH':
                this.setState({selectedMonth: parseInt(spinner.value, 10)},
                    function () {
                        this.daysOfMonth();
                    });
                break;
            case 'YEAR':
                this.setState({selectedYear: parseInt(spinner.value, 10)},
                    function () {
                        this.daysOfMonth();
                    });
                break;
            default: return;
        }
    }

    daysOfMonth() {
        const { selectedYear, selectedMonth, selectedDay } = this.state;
        let date = new Date(selectedYear, selectedMonth - 1, 1);
        let firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDate();
        let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
        this.setState({firstDayOfMonth: firstDay});
        this.setState({lastDayOfMonth: lastDay},
            function () {
                if(selectedDay > this.state.lastDayOfMonth) {
                    this.setState({selectedDay: this.state.lastDayOfMonth});
                }
            });
    }

    idHash() {
        const alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let result = "";
        for (var i = 0; i < 8; i++)
            result += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        return result;
    }

    render() {
        const { onDatePick, locale } = this.props;
        const { selectedDay, selectedMonth, selectedYear, firstDayOfMonth, lastDayOfMonth, yearId, monthId, dayId } = this.state;
        return (
            <div className={`${styles.datePickerWrapper}`}>
                <div>
                    <a ref={elem => this.dayUp = elem} onClick={() => this.spinChange(this.dayUp.nextSibling.id, "DAY", true)}><img className={`${styles.cursor}`} src={require("../../content/up.png")} alt="Up" /></a>
                    <input id={dayId} className={`${styles.spinner}`} type="number" min={firstDayOfMonth} max={lastDayOfMonth} value={selectedDay} disabled />
                    <a ref={elem => this.dayDown = elem} onClick={() => this.spinChange(this.dayDown.previousSibling.id, "DAY", false)}><img className={`${styles.cursor}`} src={require("../../content/down.png")} alt="Down" /></a>
                </div>
                <div>
                    <a ref={elem => this.monthUp = elem} onClick={() => this.spinChange(this.monthUp.nextSibling.id, "MONTH", true)}><img className={`${styles.cursor}`} src={require("../../content/up.png")} alt="Up" /></a>
                    <input id={monthId} className={`${styles.spinner}`} type="number" min="1" max="12" value={selectedMonth} disabled />
                    <a ref={elem => this.monthDown = elem} onClick={() => this.spinChange(this.monthDown.previousSibling.id, "MONTH", false)}><img className={`${styles.cursor}`} src={require("../../content/down.png")} alt="Down" /></a>
                </div>
                <div>
                    <a ref={elem => this.yearUp = elem} onClick={() => this.spinChange(this.yearUp.nextSibling.id, "YEAR", true)}><img className={`${styles.cursorYear}`} src={require("../../content/up.png")} alt="Up" /></a>
                    <input id={yearId} className={`${styles.spinnerYear}`} type="number" min="1900" max="2100" value={selectedYear} disabled />
                    <a ref={elem => this.yearDown = elem} onClick={() => this.spinChange(this.yearDown.previousSibling.id, "YEAR", false)}><img className={`${styles.cursorYear}`} src={require("../../content/down.png")} alt="Down" /></a>
                </div>
                <button className={`${styles.setBtn}`} onClick={() => onDatePick(new Date(selectedYear, selectedMonth - 1, selectedDay).toLocaleDateString(locale))}>&#10004;</button>
            </div>
        );
    }
};

DatePicker.propTypes = {
    onDatePick: PropTypes.func.isRequired,
    locale: PropTypes.string.isRequired
};

DatePicker.defaultProps = {
    locale: 'is-IS'
};

export default DatePicker;
