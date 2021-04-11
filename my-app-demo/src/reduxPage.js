import React from 'react';
import store from './store/index.js';

/**
 * redux 总结
 * 1. createStore创建一个store
 * 2. reducer初始化，修改函数
 * 3. store.getState 获取状态值
 * 4. store.dispatch 触发操作
 * 5. store.subscribe 订阅state数据改变
 *
 * @export
 * @class ReduxPage
 * @extends {React.Component}
 */
export default class ReduxPage extends React.Component {
    componentDidMount() {
        // store.subscribe(() => {
        //     // state数据发生改变，更新view
        //     this.forceUpdate();
        // })
    }
    render() {
        console.log('store', store);
        return (
            <button onClick={() => store.dispatch({type: 'ADD', step: 5})}>{store.getState()}</button>
        )
    }
}