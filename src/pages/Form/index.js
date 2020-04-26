// 实现Form、field、useForm
import React from 'react';
import KForm from './KForm';
import Field from './KField';
import useForm from './useForm';
// 不使用React.forwardRef，会报错： TypeError: Cannot add property current, object is not extensible
const Form = React.forwardRef(KForm);  
Form.Field = Field;
Form.useForm = useForm;

export {Field, useForm};
export default Form;
