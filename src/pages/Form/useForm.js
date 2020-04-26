import React from 'react'

class FormStore {
  constructor() {
    this.store = {}; // 存放数据
    this.fieldEntities = []; // 存放field实例
    this.callbacks = {};
  }

  // 注册一个field实例
  registerField = (field) => {
    this.fieldEntities.push(field)
    return () => {
      
      this.fieldEntities = this.fieldEntities.filter(item => item !== field);
      delete this.store[field.props.name];
      console.log(this.fieldEntities)
    }
  }

  // 存放onFinish、onFinishFailed
  setCallback = (callback) => {

    this.callbacks = {
      ...this.callbacks,
      ...callback
    }

  }
  // 取数据
  getFieldValues = () => {
    return this.store;
  }

  getFieldValue = (name) => {
    return this.store[name];
  }
  // 设置数据
  setFieldsValue = (newStore) => {
    // 更新Store中的数据
    this.store = {
      ...this.store,
      ...newStore
    }
    // TODO 更新到组件上
    this.fieldEntities.forEach(entity => {
      const { name } = entity.props;
      if (newStore[name] !== undefined) {
        entity.updateChange();
      }
    })


  }
  validate = () => {
    let err = [];
    
    this.fieldEntities.forEach(entity => {
      const { name, rules } = entity.props;
      let value = this.getFieldValue(name);
      let rule = rules && rules[0];
      if (rule && rule.required && (value === undefined || value === "")) { // 出错
        err.push({
          [name]: rule.message,
        });
      }
    });
    console.log(err)
    return err;
  }
  submit = () => {
    // 在这里执行校验，成功执行onFinish, 失败执行onFinishFailed
    let err = this.validate();
    const { onFinish, onFinishFailed } = this.callbacks;
    if (err.length === 0) {
      onFinish(this.getFieldValues());
    } else {
      onFinishFailed(err);
    }
  }
  getForm = () => {
    return {
      registerField: this.registerField,
      submit: this.submit,
      getFieldValues: this.getFieldValues,
      getFieldValue: this.getFieldValue,
      setFieldsValue: this.setFieldsValue,
      setCallback: this.setCallback
    }
  }
}

// 自定义hook
export default function useForm(form) {
  const formRef = React.createRef();
  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      // new 一个
      const formStore = new FormStore();
      formRef.current = formStore.getForm();
    }
  }

  return [formRef.current];
}
