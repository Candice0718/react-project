import React from 'react';

export default class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }
    componentDidMount() {
        // 组件已加载
        this.timer = setInterval(() => {
            this.setState({date: new Date()});
        }, 1000)
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    componentWillUnmount() {
        // 组件卸载
        clearInterval(this.timer);
    }
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h1>{this.state.date.toLocaleTimeString()}</h1>
            </div>
            
        )
    }
}