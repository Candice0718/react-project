import React, { Component } from 'react'

export default class Example  extends Component {
  render() {
    return (
      <div>
        <Child>
          <h1>h1</h1>
          <h2>h2</h2>
        </Child>
      </div>
    )
  }
}

class Child extends Component {
  render() {
    console.log('child', this.props.children)
    return (
      <div>
        {
          this.props.children.map(el => {
            return el
          })
        }
      </div>
    )
  }
}

