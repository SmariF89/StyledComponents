import React from 'react';
import styles from './Tabs.css';
import Tab from './Tab'
import PropTypes from 'prop-types';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            layout: props.layout,
            currentSelectedTab: props.currentSelectedTab,
            onSelect: props.onSelect,
            theme:props.theme
        }
    };

    selectionHandler(key) {
        const { onSelect } = this.state;
        this.setState({currentSelectedTab: key});
        onSelect(key);
    }

    render() {
        const {layout, currentSelectedTab, theme } = this.state;
        const tabs = this.props.children;
        if(tabs.length > 1) {
            return(
                <div className={`${styles[`tab-${layout}`]} ${styles[`${theme}`]} `}>
                    {tabs.map(t => (
                        <a  onClick={() => this.selectionHandler(t.props.selectionKey)} key={t.props.selectionKey}>{t.props.title}</a>))}
                    <Tab Layout={layout} Theme={theme}  selectionKey={tabs[currentSelectedTab - 1].props.selectionKey} title={tabs[currentSelectedTab - 1].props.title}>
                        {tabs[currentSelectedTab - 1].props.children}
                    </Tab>
                </div>
            );
        }
        else {
          return (
            <div className={`${styles[`tab-${layout}`]} ${styles[`${theme}`]} `}>
               <a onClick={() => this.selectionHandler(tabs.props.selectionKey)} key={tabs.props.selectionKey}>{tabs.props.title}</a>
               <Tab Layout={layout} Theme={theme} selectionKey={tabs.props.selectionKey} title={tabs.props.title} >
                {tabs.props.children}
               </Tab>
            </div>
          )
        }
    }
};

Tabs.propTypes = {
    theme: PropTypes.oneOf(['dark','light']),
    layout: PropTypes.oneOf(['horizontal','vertical']),
    onSelect: PropTypes.func.isRequired,
    currentSelectedTab: PropTypes.number.isRequired
};

Tabs.defaultProps = {
    theme : 'light',
    layout : 'horizontal'
};

export default Tabs;
