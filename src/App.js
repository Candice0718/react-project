
import React, { Component } from 'react'
// import ReduxPage from './pages/ReduxPage'
import ContextPage from './pages/ContextPage'
import AntdFormPage from './pages/AntdFormPage'
import MyFormPage from './pages/MyFormPage'

class App extends Component {

  render() {
    return (
      <div className="App">
        {/* <ContextPage/> */}
        {/* <AntdFormPage/> */}
        <MyFormPage/>
      </div>
    )
  }
}

export default App
