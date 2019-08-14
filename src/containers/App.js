import React from 'react'
import { connect } from 'react-redux'
import { Input } from '../components/Input'
import { Output } from '../components/Output'
import { setNameDot } from '../action/InputAction'

class App extends React.Component {
  render(){
    const { sideBar, setNameDotActions } = this.props;

    return (
      <div className="app">
        <Input setNameDot={setNameDotActions}/>
        <Output nameDot={sideBar.nameDot}/>
      </div>
    )
  }
}

//приклеиваем данные из store
const mapStateToStore = store => {
  console.log(store)
  return{
    sideBar: store.sideBar
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setNameDotActions: nameDot => dispatch(setNameDot(nameDot))
  }
}

export default connect(
  mapStateToStore,
  mapDispatchToProps
)(App)
