import React from 'react';
import { connect } from 'react-redux';
import ThemeContext from '../context/themeContext.js';
import Header from "../components/Header/Header.js"
import Body from '../components/Body/Body.js';
import Bottom from '../components/Bottom/Bottom.js';

export default connect(
    // 将state映射到props
    state => ({ counter: state }),
    // 将dispatch映射到props
    {
        add: (step) => ({ type: 'ADD', step}),
        min: (step) => ({ type: 'MINUS', step}),
    }
)(class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'green'
        }
    }
    toggle = () => {
        const theme = this.state.color;
        console.log(theme);
        this.setState({color: theme === 'green' ? 'red' : 'green' })
    }
    render() {
        const { counter, add, min } = this.props;
        const { color } = this.state;
        return (
            <React.Fragment>
                <ThemeContext.Provider value={ color }>
                    <Header>Header</Header>
                    <Body>Body</Body>
                    <Bottom>Bottom</Bottom>
                </ThemeContext.Provider>
                { counter }
                <button onClick={() => {add(5)}}>+</button>
                <button onClick={() => {min(5)}}>-</button>
                <button onClick={this.toggle}>toggle</button>
            </React.Fragment>
        )

    }
});