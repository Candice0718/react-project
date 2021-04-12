import React from 'react';
import styles from './css/index.module.css'
import { createPortal } from 'react-dom';

export default class Dialog extends React.Component {
    constructor(props) {
        super(props);
        this.node = window.document.createElement('div');
        document.body.appendChild(this.node);
    }
    componentWillUnmount() {
        if(this.node) {
            document.body.removeChild(this.node);
        }
    }
    render() {
        return(
            createPortal( // 传送门
                <div className={styles.dialog}>
                    dialog
                </div>, this.node
            )
        );
    }
}