import React, { Component } from 'react'
import ContextTypePage from './ContextTypePage';
import UserTypePage from './UserTypePage';
import ConsumerPage from './ConsumerPage';
import { ThemeContext, UserContext } from '../Context';
import './context.css';

export default class ContextPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: {
        themeColor: "red"
      }, user: {
        name: "xiaoming"
      }
    };
  }

  changeColor = () => {
    const { themeColor } = this.state.theme;
    this.setState({
      theme: {
        themeColor: themeColor === 'red' ? 'green' : 'red'
      }
    });
  };
  render() {
    const { theme, user } = this.state;
    return (
      <div>
        <h3> ContextPage </h3>
        <button onClick={this.changeColor}>change color</button>
        {/* 使用Context，子孙组件this上都会绑定context */}
        {/* 通过Provide共享数据 */}
        <ThemeContext.Provider value={theme}>
          <UserContext.Provider value={user}>
            {/* 子孙组件获取Context */}
            <ContextTypePage />
            {/* Function组件获取多个Context */}
            <UserTypePage />
            {/* Class组件获取多个Context */}
            <ConsumerPage/>
          </UserContext.Provider>
        </ThemeContext.Provider>
        {/* 用props通信 */}
        {/* <ContextTypePage {...theme}></ContextTypePage> */}
      </div>
    )
  }
}
