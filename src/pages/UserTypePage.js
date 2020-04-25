import React, { Component, useContext } from 'react'
import { ThemeContext, UserContext } from '../Context'
export default function UserTypePage() {
  // 在Function组件中useContext可以使用多次
  const themeContext = useContext(ThemeContext);
  const {themeColor} = themeContext;

  const userContext = useContext(UserContext);
  const {name} = userContext;

return <div className={themeColor}>{name}</div>
}
