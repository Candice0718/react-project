import React from 'react';
import themeContext from '../../context/themeContext.js';
import styles from './Body.module.css';
export default class Body extends React.Component {
    static contextType = themeContext;
    constructor(props) {
        super(props);
    }
    render() {
        const { children } = this.props;
        console.log();
        const theme = this.context;
        return (
            <React.Fragment>
                <div className={ styles.body + " " + styles[theme]}>
                    {
                        children
                    }
                </div>
            </React.Fragment>
        )
    }
}