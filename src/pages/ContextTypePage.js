import React, { Component, useContext } from 'react'
import { ThemeContext} from '../Context';

export default class ContextTypePage extends Component {
  // 给静态属性contextType赋值context，就可以拿到Ccontext.provide提供的数据
  static contextType = ThemeContext;
  render() {
    const {themeColor} = this.context || {};
    return (
      <div className={themeColor}>
        ContextTypePage
        <Child></Child>
      </div>
    )
  }
}

function Child() {
  // 使用useContext Hook来获取数据：const themeContext = useContext(ThemeContext);
  const themeContext = useContext(ThemeContext);
  const {themeColor} = themeContext;

  return <div className={themeColor}>Child</div>
}