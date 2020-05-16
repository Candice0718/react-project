

export function applyMiddleware(...middlewares) {
  return createStore => reducer => {
    // 获取store
    let store = createStore(reducer);
    // 获取store中定义的dispatch
    let dispatch = store.dispatch;

    const midApi = {
      getState: store.getState,
      dispatch: (action, ...args) => dispatch(action, ...args)
    };

    // 加强dispatch
    const middlewareChain = middlewares.map(middleware => middleware(midApi));
    dispatch = compose(...middlewareChain)(store.dispatch);

    return {
      ...store,
      dispatch
    }
  }
}

/**
 * 聚合
 * @param {*} funcs
 */
function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }
  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}