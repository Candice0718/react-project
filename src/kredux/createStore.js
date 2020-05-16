// 1. 创建createStore方法
// 2. return {getState, dispatch, subscribe}三个方法
const createStore = (reducer, enhancer) => {
  if (enhancer) {
    return enhancer(createStore)(reducer);
  }
  let state;
  let listeners = [];
  // getState返回当前state
  const getState = () => state;

  const dispatch = (action) => {
    // 调用reducer,并将执行结果赋值给当前state
    state = reducer(state, action);
    // 执行监听
    listeners.forEach(listener => listener());
  }

  // 将订阅事件保存
  const subscribe = (listener) => {
    listeners.push(listener);
    // 清空订阅事件
    return () => {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    }
  }
  // 默认第一次要执行一次dispatch获取reducer中定义的初始值
  // type必须是一个随机数，防止和用户定义的type重复

  dispatch({ type: '13242vfbfb' })
  return {
    getState,
    dispatch,
    subscribe
  }
}

export { createStore };