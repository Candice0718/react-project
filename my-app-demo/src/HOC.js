import React from 'react';
function foo(Cmp) {
    return (props) => {
        return (
            <div style={{border: '1px solid red'}}>
                {props.omg}
                <Cmp {...props}></Cmp>
            </div>
        )
    }
}
class Child extends React.Component {
    render() {
        return (
            <div>child</div>
        )
    }
}
const Foo = foo(foo(Child));

export default class Hoc extends React.Component {
    render() {
        return (
            <div>
                <Foo omg="omg"></Foo>
            </div>
        );
    }
}

