import React, { Component } from 'react'
import './css/hocpage.css';
// hoc: 是一个函数，接受一个组件，返回一个组件
// 这里大写开头的Cmp是指function或者class组件
const foo = Cmp => props => {
  return (
    <div className="border">
      <Cmp {...props} /> </div>
  );
};
const foo2 = Cmp => props => {

  return (
    <div className="greenBorder"> <Cmp {...props} />
    </div>
  );
};
// function Child(props) {
//   return <div> Child {props.name}</div>;
// }
// const Foo = foo2(foo(foo(Child)));
@foo2
@foo
@foo
class Child extends Component {
  render() {
    return <div> Child {this.props.name}</div>;
  }
}
export default class HocPage extends Component {
  render() {
    return (
      <div>
        <h3>HOC page</h3>
        {/* <Foo name="msg" /> */}
        <Child/>
      </div>
    )
  }
}
