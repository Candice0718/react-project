import React, { Component, useEffect } from 'react'
import Form, { Field } from './Form/index'
import useForm from './Form/useForm'

const nameRules = { required: true, message: "请输⼊入姓 名!" };
const passwordRules = { required: true, message: "请输 ⼊入密码!" };

// 实现Class版本
export default class MyFormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
  }
  formRef = React.createRef();
  onFinish(field) {
    console.log('-----onFinish----', field)
  }
  onFinishFailed(err) {
    console.log('-----onFinishFailed----', err)
  }
  onChange = () => {
    this.setState({ show: !this.state.show })
  }
  componentDidMount() {
    this.formRef.current.setFieldsValue({ username: "default" });
  }

  render() {
    const { show } = this.state
    return (
      <div>
        <h3>MyFormPage</h3>
        <button onClick={this.onChange}>change</button>
        <Form ref={this.formRef} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
          {
            show && (
              <Field name="username" rules={[nameRules]}>
                <textarea type="text" placeholder="input username" value=""/>
              </Field>
            )
          }
          <Field name="password" rules={[passwordRules]}>
            <textarea type="text" placeholder="input password" value=""/>
          </Field>
          <button type="sumbit">sumbit</button>
        </Form>
      </div>
    )
  }
}
// 实现了Function
// export default function MyFormPage() {
//   const [form] = useForm();
//   useEffect(() => {
//     form.setFieldsValue({username: "default"})
//   }, []);
//   const onFinish = (field) => {
//     console.log('-----onFinish----', field)
//   }
//   const onFinishFailed = (err) => {
//     console.log('-----onFinishFailed----', err)
//   }
//   return (
//     <div>
//       <h3>MyFormPage</h3>
//       <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
//         <Field name="username" rules={[nameRules]}>
//           <input type="text" placeholder="input username"/>
//         </Field>
//         <Field name="password" rules={[passwordRules]}>
//           <input type="text" placeholder="input password"/>
//         </Field>
//           <button type="sumbit">sumbit</button>
//       </Form>
//     </div>
//   )

// }
