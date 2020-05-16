import React, { Component } from 'react'
import { Button } from 'antd'
import { counterStore } from '../store'

/**
 *
 * Redux状态容器，可预测化存储数据，它保证程序行为一致性
 * @export
 * @class ReduxPage
 * @extends {Component}
 */
export default class ReduxPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    };
    this.onDecrement = this.onDecrement.bind(this);
  }
  componentDidMount() {
    this.subscribe = counterStore.subscribe(() => {
      this.forceUpdate();
    })
  }
  componentWillUnmount() {
    // 清空监听
    this.subscribe();
  }
  onIncrement = () => {
    console.log('#####');
    console.log(this.state);
    
    counterStore.dispatch({ type: 'ADD', payload: this.state.value });
  }
  onDecrement(){
    counterStore.dispatch({ type: 'MINUS', payload: this.state.value  });
  }
  taggle = () => {
    let status = counterStore.getState().status;
    counterStore.dispatch({ type: status.toUpperCase() });
  }
  /**
   *
   * 中间件 thunk使用方法
   * @memberof ReduxPage
   */
  asyAdd = () => {
    counterStore.dispatch((dispatch, getState) => {
      setTimeout(() => {
        counterStore.dispatch({ type: 'ADD', payload: 50 });
      }, 1000);
    });
  }
  /**
   *
   *  中间件 promise使用方法
   * @memberof ReduxPage
   */
  promiseMinus = () => {

    counterStore.dispatch(Promise.resolve({ type: 'MINUS', payload: 30 }));
  }

  valueChange = event => {
    this.setState({
      value: event.target.value - 0
    })
  }
  render() {
    const { status, count } = counterStore.getState();
    const { value } = this.state;
    
    return (
      <div className="App">
        {
          count
        }
        <Button type="primary" onClick={this.onIncrement}>+</Button>
        <Button type="primary" onClick={this.onDecrement}>-</Button>
        <Button type="primary" onClick={this.taggle}>{status}</Button>
        {/* store异步调用 中间件thunk*/}
        <Button type="Primary" onClick={this.asyAdd}>asyAdd</Button>
        {/* store异步调用 中间件promise*/}
        <Button type="Primary" onClick={this.promiseMinus}>promiseMinus</Button>

        <input value={value} onChange={this.valueChange}/>
      </div>
    )
  }
}