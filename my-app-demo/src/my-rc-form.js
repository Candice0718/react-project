import React from 'react';
export function createForm(Cmp) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {};
            this.options = {};
        }
        handleChange = (e) => {
            const { name, value } = e.target;
            this.setState({[name]: value});
        }
        // 装饰器
        getFieldDecorator = (fieldName, options) => {
            this.options[fieldName] = options;
            return (InputCmp) => {
                return React.cloneElement(InputCmp, { name: fieldName, value: this.state[fieldName] || "", onChange: this.handleChange })
            }
        };
        getFieldsValue = () => {
            return this.state;

        };
        getFieldValue = (name) => {
            return this.state[name];
        };
        validateFields = (callback) => {
            let error = [];
            for(let fieldName in this.options) {
                if(this.state[fieldName] === '') {
                    error.push({
                        [fieldName]: "err",
                        message: "未输入值"
                    })
                }
            }
            if(error.length === 0) {
                callback(null, {...this.state});
            } else {
                callback(error, {...this.state});
            }
        };
        setFieldsValue = (newStore) => {
            this.setState(newStore);
        }
        render() {
            const form = {
                getFieldDecorator: this.getFieldDecorator,
                getFieldsValue: this.getFieldsValue,
                getFieldValue: this.getFieldValue,
                validateFields: this.validateFields,
                setFieldsValue: this.setFieldsValue,
            };

            return <Cmp {...this.props} form={form}></Cmp>
        }
    }
}