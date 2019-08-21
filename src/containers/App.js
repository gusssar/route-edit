import React from 'react'
import { SideBar } from '../components/SideBar'
import { MapView } from '../components/MapView'

import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
        dots:[{name:'aaa',x:'0',y:'0'},{name:'bbb',x:'0',y:'0'}],
    }
  }

  //добавление новой точки
  setNameDot=(obj_name) => {
    this.setState(state=>({...state.dots.push(obj_name)}))
  }

  //удаление точки
  DeleteDot=(el) => {
    this.setState(state=>({
      ...state.dots.splice(
        state.dots.findIndex(
          (_el)=>_el===el),1)}))
  }

  render(){

    return (
      <div className="app">
        <SideBar 
          dots={this.state.dots} 
          setNameDot={this.setNameDot}
          DeleteDot={this.DeleteDot}
          />
        <MapView/>
      </div>
    )
  }
}



export default App
