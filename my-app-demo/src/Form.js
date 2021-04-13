import React from 'react';
// import { createForm } from 'rc-form';
import { createForm } from './my-rc-form.js';
// 原生写法
// export default class From extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: "",
//             password: ""
//         }
//     }
//     sumbit = () => {
//         console.log("sumbit", this.state);
//     }
//     nameChange = (e) => {
//         this.setState({ username: e.target.value });
//     }
//     passwordChange =(e) => {
//         this.setState({ password: e.target.value });
//     }
//     render() {
//         const { username, password } = this.state;
//         return (
//         <div className="Form">
//             <input placeholder="username" value= { username } onChange={this.nameChange}></input>
//             <input placeholder="password" value= { password } onChange={ this.passwordChange}></input>
//             <button onClick={() => {
//                 this.sumbit()
//             }}>提交</button>
//         </div>
//         )
//     }
// }

// 使用rc-form的用法
const nameRules = {require: true, message: "请填写username"};
const passwordRules = {require: true, message: "请填写password"};
class Form extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const { setFieldsValue } = this.props.form;
        setFieldsValue({"username": ""});
        setFieldsValue({"password": ""});
    }
    sumbit = () => {
        const { getFieldsValue, validateFields } = this.props.form;
        console.log("getFieldsValue", getFieldsValue());
        validateFields((error, value) => {
            console.log(error, value);
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                {getFieldDecorator('username', {rules: [nameRules]})(<input placeholder="username"/>)}
                {getFieldDecorator('password', { rules: [passwordRules]})(<input placeholder="password"/>)}
                <button onClick={() => this.sumbit()}>提交表单</button>
            </div>
        );
    }
}
export default createForm(Form)