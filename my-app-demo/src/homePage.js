import React from 'react';
import Layout from './Layout';
export default class HomePage extends React.Component {
    render() {
        return (
        <Layout showTopBar={false} showBottomBar={true} title="首页">
            { // 相当于vue中的具名插槽
                {
                    context: 'homePage',
                    clickHandler: () => {
                        console.log('clickHandler');
                    }
                }
            }
        </Layout>
        );
    }
}