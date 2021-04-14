import { createStore } from 'redux';

function counterRedux(state = 0, action) {
    switch(action.type) {
        case 'ADD': 
            return state + action.step;
        case 'MINUS':
            return state - action.step;
        default:
            return state;
    }
}
export default createStore(counterRedux);