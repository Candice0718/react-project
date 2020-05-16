// import { createStore, combineReducers, applyMiddleware } from 'redux';

// import { createStore } from '../kredux/index';
import { createStore, combineReducers, applyMiddleware } from '../kredux/index';

// import thunk from 'redux-thunk'; // 支持dispatch异步执行， 用法见ReduxPage.js  asyAdd
// import logger from 'redux-logger'; // 打印日志
// import rdPromise from 'redux-promise'; // 支持异步执行
import { isFSA } from 'flux-standard-action'; // 判断是否type/payload格式
import isPromise from 'is-promise'; // 判断是否为promise


// 1. 创建一个reducer
// 2. createStore(reducer)生成一个store
// 问题： 如果整个应用只有一个state，会导致state十分庞大，导致reducer函数也十分庞大。

const counterReducer = (state = 0, { type, payload = 1 }) => {
  switch (type) {
    case 'ADD':
      return state + payload;
    case 'MINUS':
      return state - payload;
    default:
      return state;
  }
}

const statusRducer = (state = 'OFF', { type }) => {
  switch (type) {
    case 'ON':
      return 'OFF';
    case 'OFF':
      return 'ON';
    default:
      return state;
  }
}
// 注意state的属性名必须与子reducer同名
// 如果不同名需要像下面👇一样取一个别名
const reducer = combineReducers({
  count: counterReducer,
  status: statusRducer
});

// logger中间件
function logger({ getState }) {
  return next => action => {
    console.log('prev state', getState());
    console.log(action.type + '执行了!');
    let returnValue = next(action);
    console.log('next state', getState());
    return returnValue;
  }
}

// 支持dispatch异步执行 action为function
function thunk({ getState, dispatch }) {
  // next === dispatch
  return next => action => {
    // action就是dispatch传入的action
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }
    return next(action);
  }
}


function rdPromise({ getState, dispatch }) {
  return next => action => {
    if (!isFSA(action)) {
      return isPromise(action) ? action.then(dispatch) : next(action);
    }
    return isPromise(action.payload) ? 
              action.payload
                .then(result => dispatch({ ...action, payload: result })) 
                .catch(error => {
                  dispatch({...action, payload: error, error: true})
                })
              : next(action)
  }
}
const store = createStore(reducer, applyMiddleware(thunk, logger, rdPromise));


export default store;

