import React from 'react'
import { SideBar } from '../components/SideBar'
import { MapView } from '../components/MapView'

import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
        dots:[],
        currentCenter:[],
    }
  }

  //добавление новой точки
  setNameDot=(obj_name) => {
    this.setState(state=>({...state.dots.push(obj_name)}))

    window.myMap.geoObjects
        .add(new window.ymaps.Placemark([obj_name.x, obj_name.y], {
            balloonContent: 'точка <strong>'+obj_name.name+'</strong>'
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }))
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

  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
  }
  
  handleLoad() {
    window.ymaps.ready(() => {
        this.myMap = new window.ymaps.Map('map', {center: [55.75, 37.57], zoom: 12}, {
        searchControlProvider: 'yandex#search'});
        console.log(this.myMap)

    });

  }

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
