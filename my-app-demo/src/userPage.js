import React from 'react';
import Layout from './Layout';
import { BrowserRouter as Router, Route, Link, Switch, useRouteMatch } from 'react-router-dom';

class Person extends React.Component {
    render() {
        console.log(this.props);
        const { match } = this.props;
        return (
            <h1>用户详情: { match.params.id }</h1>
        );
    }
}
export default class UserPage extends React.Component {
    render() {
        return (
            <div>
                <Layout showTopBar={false} showBottomBar={true} title="用户页面">
                    {
                        {
                            context: 'userPage',
                            clickHandler: () => {
                                console.log('clickHandler');
                            }
                        }
                    }
                </Layout>
                <Route path="/user/:id" component={Person}></Route>
            </div>
            
        );
    }
}