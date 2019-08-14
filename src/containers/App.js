import React from 'react'
import { connect } from 'react-redux'
import { Input } from '../components/Input'
import { Output } from '../components/Output'
import { setNameDot } from '../action/InputAction'
import { addListDot } from '../action/InputAction'

class App extends React.Component {
  render(){
    const { sideBar, setNameDotActions, addListDot } = this.props;

    return (
      <div className="app">
        <Input setNameDot={setNameDotActions} addListDot={addListDot} nameDotList={sideBar.nameDotList}/>
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
    setNameDotActions: nameDot => dispatch(setNameDot(nameDot)),
    addListDot: nameDot => dispatch(addListDot(nameDot))
  }
}

export default connect(
  mapStateToStore,
  mapDispatchToProps
)(App)
