import React, { Component, useEffect } from 'react'
import { Form, Input, Button } from "antd";

const FormItem = Form.Item;

const nameRules = { required: true, message: "请输⼊入姓 名!" };
const passwordRules = { required: true, message: "请输 ⼊入密码!" };

// class组件与Function组件使用Form表单的差别
// 1. class组件通过ref：React.createRef 获取表单实例 ｜ Function组件通过form：Form.useForm();
export default class AntdFormPage extends Component {
  formRef = React.createRef();
  
  componentDidMount() {
    console.log(this.formRef)
    this.formRef.current.setFieldsValue({ name: "default" });
  }
  onReset = () => {
    this.formRef.current.resetFields();
  };
  onFinish = val => {
    console.log("onFinish", val);
  };
  onFinishFailed = val => {
    console.log("onFinishFailed", val);
  };
  render() {
    return (
      <div>
        <h3>AntdFormPage</h3>
        <Form
          ref={this.formRef}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          onReset={this.onReset}
        >
          <FormItem label="姓名" name="name" rules={[nameRules]}>
            <Input placeholder="name input" value=""></Input>
          </FormItem>
          <FormItem label="密码" name="password" rules={[passwordRules]}>
            <Input placeholder="password input" value=""></Input>
          </FormItem>
          <FormItem>
            <Button type="primary" size="large" htmlType="submit">
              Sumbit
            </Button>
          </FormItem>
          <FormItem>
            <Button type="default" size="large" htmlType="reset">
              Reset
          </Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

// Function组件使用Form表单

// export default function AntdFormPage() {
//   const [form] = Form.useForm();
//   // 表单校验成功
//   const onFinish = val => { console.log("onFinish", val); };
//   // 表单校验失败
//   const onFinishFailed = val => {
//     console.log("onFinishFailed", val); //sy-log 
//   };
//   // 重置表单
//   const onReset = () => {
//     form.resetFields();
//   };

//   useEffect(() => {
//     console.log(form)
//     form.setFieldsValue({ name: "default" });
//   }, []);

//   return (
//     <div>
//       <h3>AntdFormPage</h3>
//       <Form
//         form={form}
//         onFinish={onFinish}
//         onFinishFailed={onFinishFailed}
//         onReset={onReset}
//       >
//         <FormItem label="姓名" name="name" rules={[nameRules]}>
//           <Input placeholder="name input"></Input>
//         </FormItem>
//         <FormItem label="密码" name="password" rules={[passwordRules]}>
//           <Input placeholder="password input"></Input>
//         </FormItem>
//         <FormItem>
//           <Button type="primary" size="large" htmlType="submit">
//             Sumbit
//           </Button>
//         </FormItem>
//         <FormItem>
//           <Button type="default" size="large" htmlType="reset">
//             Reset
//         </Button>
//         </FormItem>
//       </Form>
//     </div>
//   )
// }
