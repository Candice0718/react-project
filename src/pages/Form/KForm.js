import React from 'react'
import useForm from './useForm';
import {FieldContext} from './Context';
export default function KForm({children, onFinish, onFinishFailed, form}, ref) {
  const [formInstance] = useForm(form);
  formInstance.setCallback({
    onFinish,
    onFinishFailed
  })

  // ref.current = {...formInstance} ref.current不允许赋值
  React.useImperativeHandle(ref, () => formInstance );
  // console.log(ref.current, formInstance)
  return (
    <form
      onSubmit={
        event => {
          event.preventDefault();
          event.stopPropagation();
          // sumbit
          formInstance.submit()
        }
      }
    >
      {/* 特别注意Provider必须要大写 */}
      <FieldContext.Provider value={formInstance}>
        {children}
      </FieldContext.Provider>
    </form>
  )
}
