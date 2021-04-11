import React from 'react';

export default class Layout extends React.Component {
    componentDidMount() {
        const { title } = this.props;
        document.title = title;
    }
    render() {
        const {showTopbar, showBottomBar, children} = this.props;
        
        return (
            <div>
                { showTopbar && <h1>topBar</h1>}
                {/* {this.props.children} */}
                {
                    children.context
                }
                <button onClick={children.clickHandler}>测试</button>
                { showBottomBar && <h1>bottomBar</h1>}
            </div>
            
        )
    }
}