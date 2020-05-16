
import React, { Component } from 'react'
import ReduxPage from './pages/ReduxPage'
// import ContextPage from './pages/ContextPage'
// import AntdFormPage from './pages/AntdFormPage'
import MyFormPage from './pages/MyFormPage'
import HocPage from './pages/HocPage'
import ModalPage from './pages/ModalPage'

class App extends Component {

  render() {
    return (
      <div className="App">
        {/* <ContextPage/> */}
        {/* <AntdFormPage/> */}
        {/* <MyFormPage/> */}
        {/* <HocPage/> */}
        {/* <ModalPage/> */}
        <ReduxPage/>
      </div>
    )
  }
}

export default App
