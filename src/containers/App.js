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

  //начало перетаскивания
  DragStart=(e,idx)=>{
    this.dragItem=this.state.dots[idx];
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target);
    // e.dataTransfer.setDragImage(e.target, -20, -20);
  }

  //обработка переноса
  DragOver=(idx)=>{
    const draggedOverItem = this.state.dots[idx];
    //если совпадает с текущем значением ничего не делаем
    if (this.dragItem === draggedOverItem) {return}
    // console.log(draggedOverItem, this.dragItem)

    //отфильтровываем текущий элемент из массива
    let _dots = this.state.dots.filter(item => item !== this.dragItem);
    this.setState((state)=>({...state, dots:_dots}))

    //добавляем элемент в массив
    this.setState(state=>({...state.dots.splice(idx,0,this.dragItem)}))
  }

  //окончание переноса
  DragEnd = () => {
    this.dragItem= null;
  };

  render(){

    return (
      <div className="app">
        <SideBar 
          dots={this.state.dots} 
          setNameDot={this.setNameDot}
          DeleteDot={this.DeleteDot}
          DragStart={this.DragStart}
          DragOver={this.DragOver}
          DragEnd={this.DragEnd}
          />
        <MapView
          />
      </div>
    )
  }
}



export default App
