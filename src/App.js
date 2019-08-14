import React from 'react';
import { connect } from 'react-redux'

class App extends React.Component {
  render(){
    const { sideBar } = this.props;
    
    return (
      <div className="app">
        <input placeholder='input'></input>
        <div>{sideBar.nameDot}</div>
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

export default connect(
  mapStateToStore
)(App)
