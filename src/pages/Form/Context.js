import React from 'react';
const warnFunc = () => {
  console.log('------------warn-----------');
}
export const FieldContext = React.createContext({
  registerField: warnFunc,
  submit: warnFunc,
  getFieldValues: warnFunc,
  getFieldValue: warnFunc,
  setFieldsValue: warnFunc,
  setCallback: warnFunc
});