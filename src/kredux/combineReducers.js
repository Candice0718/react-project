// 1. 创建一个combineReducer方法
// 2. 根据state的key去执行相应的reducer，并将结果合并成一个大的State对象

const combineReducers = reducers => {
  return (state = {}, action) => {
    // 将reducers中的所有的子reducer合并成一个大的State
    return Object.keys(reducers).reduce((nexState, key) => {
      nexState[key] = reducers[key](state[key], action);
      return nexState;
    }, {})
  }
}
export { combineReducers }