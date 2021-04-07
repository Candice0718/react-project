
import React, { Component } from 'react'
import ReduxPage from './pages/ReduxPage'
// import ContextPage from './pages/ContextPage'
// import AntdFormPage from './pages/AntdFormPage'
import MyFormPage from './pages/MyFormPage'
import HocPage from './pages/HocPage'
import ModalPage from './pages/ModalPage'
import Example from './pages/Example'

class App extends Component {

  render() {
    return (
      <div className="App">
        {/* <ContextPage/> */}
        {/* <AntdFormPage/> */}
        {/* <MyFormPage/> */}
        {/* <HocPage/> */}
        {/* <ModalPage/> */}
        {/* <ReduxPage/> */}
        <Example/>
      </div>
    )
  }
}

export default App
