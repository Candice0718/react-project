import React from 'react';
import { connect } from 'react-redux';

export default connect(
    // 将state映射到props
    state => ({ counter: state }),
    // 将dispatch映射到props
    {
        add: (step) => ({ type: 'ADD', step}),
        min: (step) => ({ type: 'MINUS', step}),
    }
)(class IndexPage extends React.Component {
    render() {
        const { counter, add, min } = this.props;
        return (
            <div>
                IndexPage
                { counter }
                <button onClick={() => {add(5)}}>+</button>
                <button onClick={() => {min(5)}}>-</button>
            </div>
        )

    }
});