import React, { Component, PureComponent } from 'react';

// export default class PureComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             counter: 0,
//             obj: {
//                 age: 0
//             }
//         }
//     }
//     shouldComponentUpdate(nextProps, nextState) { // 手动性能优化 可以直接使用PureComponent代替
//         return this.state.obj.age !== nextState.obj.age;
//     }
//     changeCounter() {
//         this.setState({counter: 100, obj: {age: 100}})
//     }
//     render() {
//         const { counter, obj } = this.state;
//         console.log("counter", counter);
//         return (
//             <div>
//                 <button onClick={() => this.changeCounter()}>{ counter }, { obj.age }</button>
//             </div>
//         )
//     }
// }
export default class PureComponent1 extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            obj: {
                age: 0
            }
        }
    }
    changeCounter() {
        this.setState({counter: 100, obj: {age: 100}}); // 浅比较
    }
    render() {
        const { counter, obj } = this.state;
        console.log("counter", counter);
        return (
            <div>
                <button onClick={() => this.changeCounter()}>{ counter }, { obj.age }</button>
            </div>
        )
    }
}