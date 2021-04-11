import React from "react";

export default class SetStateComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }
    componentDidMount() {
        // this.changeValue(1);
    }
    changeValue = (v) => {
        // 生命周期中、组合事件，state为异步,异步是批量更新的
        this.setState({
            counter: this.state.counter + v
        });
        console.log('counter: ', this.state.counter);
    }
    changeFunctionState = (v) => { 
        // setState为function，链式操作state
        this.setState((state) => ({
            counter: state.counter + v
        }));
    }
    changeSyncValue = (v) => {
        this.setState({
            counter: this.state.counter + v
        }, () => {
            console.log('counter: ', this.state.counter);
        });
    }
    setCounter = () => {
        // this.changeValue(1);
        // 在原生事件、定时器、state的callback、中state为同步
        // setTimeout(() => {
        //     this.changeValue(1);
        // }, 0);
        // this.changeSyncValue(1);
        this.changeFunctionState(1);
        this.changeFunctionState(2);
    }
    render() {
        const { counter } = this.state;
        return (
            <button onClick={() => this.setCounter()}>{counter}</button>
        );
    }
}