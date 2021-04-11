import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useRouteMatch } from 'react-router-dom';
import homePage from './homePage.js';
import userPage from './userPage';

class Person extends React.Component {
    render() {
        return (
            <h1>用户详情</h1>
        );
    }
}
function Nested(props) {
    // 获取route的匹配数据
    // path 路径， url 路径, params 参数
    const { path, url, params } = useRouteMatch();
    return (
        <Switch>
            <Route exact path={path} component={ userPage }/>
            <Route  path={`${path}/:id`} component={Person}/>
        </Switch>
    )
}
export default class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Link to="/">首页</Link>
                    <Link to="/user" style={{"marginLeft": "10px"}}>用户页</Link>
                    <Link to="/user/12" style={{"marginLeft": "10px"}}>用户详情</Link>
                    {/* 添加Switch表示仅匹配一个 */}
                    <Switch>
                        {/* 根路由需要添加exact，实现精确匹配 */}
                        <Route exact path="/" component={ homePage }></Route>
                        <Route path="/user" component={ userPage }></Route>
                        <Route render={() => <div>404</div>}></Route>
                    </Switch>
                </Router>
            </div> 
        )  
    }
}