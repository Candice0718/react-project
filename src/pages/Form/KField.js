import React, { Component } from 'react'
import { FieldContext } from './Context'
export default class KField extends Component {
  static contextType = FieldContext;

  componentDidMount() {
    const { registerField } = this.context;
    this.cancelRegisterField = registerField(this);

  }

  componentWillUnmount() {
    console.log('componentWillUnmount', this)
    if (this.cancelRegisterField) {
      this.cancelRegisterField();
    }
    const { registerField, fieldEntities } = this.context;
  }

  updateChange = () => {
    this.forceUpdate();
  }
  getControlled = () => {
    const { name } = this.props;
    const { getFieldValue, setFieldsValue } = this.context;
    return {
      value: getFieldValue(name), // 取数据
      onChange: event => { // 存数据
        const newValue = event.target.value;
        setFieldsValue({ [name]: newValue });
      }
    }
  }
  render() {
    const { children } = this.props;

    const returnChildNode = React.cloneElement(children, this.getControlled()); // React clone一个元素
    return returnChildNode
  }
}
