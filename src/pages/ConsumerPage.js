import React, { Component } from 'react'
import { ThemeContext, UserContext } from '../Context'

export default class ConsumerPage extends Component {
  render() {
    return (
      <div>
        <h3>ConsumerPage</h3>
        {/* Class组件要同时使用多个Context，要使用Consumer */}
        <ThemeContext.Consumer>
          {
            themeCtx => (
              <div className={themeCtx.themeColor}>
                {
                  <UserContext.Consumer>
                    {/* 使用Consumer要注意格式 */}
                    {
                      userCtx => <div>userCtx.name</div>
                    }
                  </UserContext.Consumer>
                }
              </div>
            )
          }
        </ThemeContext.Consumer>
      </div>
    )
  }
}
