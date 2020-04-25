import React from 'react'

// 创建一个主题context

// Class组件使用Context的三个步骤
// 1. 创建一个Context： React.createContext()
// 2. provide共享数据：<ThemeContext.provide value={}></ThemeContext.provide>
// 3. 静态属性contextType赋值：static contextType = ThemeContext; this.context就可以拿到相应的数据

// Function组件使用Context的三个步骤
// 1. 创建一个Context： React.createContext()
// 2. provide共享数据：<ThemeContext.provide value={}></ThemeContext.provide>
// 3. 使用useContext Hook来获取数据：const themeContext = useContext(ThemeContext);
export const ThemeContext = React.createContext();

export const UserContext = React.createContext();

