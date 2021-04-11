import React from 'react';
import ReactDom from 'react-dom';
import logo from './images/1.jpg';
import styles from './css/index.module.css';
import ClassComponent from './ClassComponent.js';
import FunctionComponent from './FunctionComponent.js';
import SetStateComponent from './SetStateComponent.js';
import HomePage from './homePage.js';
import ReduxPage from './reduxPage.js';
import ReactReduxComponent from './ReactReduxPage.js';
import store from './store/index.js';
import { Provider } from 'react-redux';
import App from './AppRoute.js';


/**
 * JSX语法
 * 1. 使用变量{}
 * 2. 使用函数
 * 3. jsx
 * 4. 条件语句
 * 5. 数组
 * 6. 属性
 * 7. 模块化
 */
const name = "react";
const obj = {
    firstname: "吴",
    lastname: "琼"
};
const great = <h1>hello great!</h1>
const show = true;
const arr = [1, 2, 3];
function getFullName(obj) {
    return obj.firstname + ' ' + obj.lastname;
}
const JSX = (
    <div>
        <h1>hello, { name }</h1>
        <h1>{ getFullName(obj) }</h1>
        {great}
        {show?great: '登录'}
        {show && great}
        {
            arr.map(item => {
                return <li key={item}>{item}</li>
            })
        }
        {
            <img src={logo} style={{width: 100, height: 100}}></img>
        }
        {
            <img src={logo} className={styles.logo}></img>
        }
    </div>
    
);
const components = (
    <div>
        <ClassComponent name={getFullName(obj)}></ClassComponent>
        <FunctionComponent name={getFullName(obj)}></FunctionComponent>
        {/* <SetStateComponent></SetStateComponent> */}
    </div>
);
// ReactDom.render(
//     <Provider store={store}>
//         <ReactReduxComponent></ReactReduxComponent>
//     </Provider>, document.getElementById('root'));
ReactDom.render( <Provider store={store}>
    <App></App>
</Provider>, document.getElementById('root'));

// store.subscribe(() => {
//     ReactDom.render(
//         <ReduxPage></ReduxPage>
//     , document.getElementById('root'));
// })