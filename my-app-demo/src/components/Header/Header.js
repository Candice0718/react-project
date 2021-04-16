import React, { useContext }  from 'react';
import ThemeContext from '../../context/themeContext.js';
import styles from './Header.module.css';
export default function Header(props) {
    const theme = useContext(ThemeContext);
    return (
        <React.Fragment>
            <div className={ styles.header + " " + styles[theme]}>
                {
                    props.children
                }
            </div>
        </React.Fragment>
    );
}