import React from 'react';
import styles from './Layout.module.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import IndexPage from "../../pages/indexPage.js";
import CartPage from "../../pages/cartPage.js";
import OrderListPage from "../../pages/orderListPage.js";
import UserPage from "../../pages/userPage.js";

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.menuList = [
            {
                "icon": "shouye",
                "title": "首页",
                "link": "/"
            },
            {
                "icon": "gouwuche2",
                "title": "购物车",
                "link": "/cart"
            },
            {
                "icon": "dingdanliebiao",
                "title": "订单列表",
                "link": "/orderList"
            },
            {
                "icon": "icon-user-light",
                "title": "用户中心",
                "link": "/user"
            },
        ];
        this.state = {
            active: 0
        }
    }
    changeActive = (index) => {
        this.setState({
            active: index
        });
    }
    render() {
        const { active } = this.state;
        return(
            <Router>
            <div className={styles.layout}>
                <div className={styles.main}>
                    {/* 添加Switch表示仅匹配一个 */}
                    <Switch>
                            {/* 根路由需要添加exact，实现精确匹配 */}
                            <Route exact path="/" component={ IndexPage }></Route>
                            <Route path="/cart" component={ CartPage }></Route>
                            <Route path="/orderList" component={ OrderListPage }></Route>
                            <Route path="/user" component={ UserPage }></Route>
                            <Route render={() => <div>404</div>}></Route>
                        </Switch>
                </div>
                <div className={styles.bottom}>
                    {this.menuList.map((item,index) => {
                        return (
                            <Link 
                                to={item.link} key={index} 
                                className={styles.menu + ' ' + `${ active === index ? styles.active : ''}`}
                                onClick={
                                    () => this.changeActive(index)
                                }>
                                <span className={ "icon iconfont icon-" + item.icon}></span>
                                <span>{ item.title}</span>
                            </Link>
                        )
                    })}
                </div>
            </div>
            </Router>
        )
    }
}