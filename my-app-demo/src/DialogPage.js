import React from 'react';
import Dialog from './Dialog.js';
export default class DialogPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDialog: false
        }
    }
    render() {
        const { showDialog } = this.state;
        return (
            <div className="dialogPage">
                { showDialog && <Dialog></Dialog> }
                <button onClick={ () => this.setState({
                    showDialog: !this.state.showDialog
                })}>toggle</button>
            </div>
        );
    }
}