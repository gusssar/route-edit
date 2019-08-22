import React from 'react'
import { SideBar } from '../components/SideBar/index'
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

  //Обработка точек на карте
  AddDots = (_arr) => {
  //сооздаём группу оъектов
  var myGroup = new window.ymaps.GeoObjectCollection();

    // Добавляем в группу метки и линию.
    _arr.forEach((el)=> myGroup.add(
      new window.ymaps.Placemark(
        [el.x, el.y], 
        {balloonContent: el.name}, 
        {draggable:true}
      )
    ));

    //набрасываем слушатель окончания переноса на колекцию
    myGroup.events.add("dragend", (event)=>this.DragMap(event));

    // Добавляем группу на карту.
    window.myMap.geoObjects.add(myGroup);
  };

  //Обработка ломаной на карте
  AddPolyline = (_arr) => {
    if(_arr.length>1){
      const arr=_arr.map((el)=>[el.x, el.y])

      var myPolyline = new window.ymaps.Polyline(
            // Указываем координаты вершин ломаной.
            arr, {
            // Описываем свойства геообъекта.
            // Содержимое балуна.
            balloonContent: "Ломаная линия"
        }, {
            // Задаем опции геообъекта.
            // Отключаем кнопку закрытия балуна.
            balloonCloseButton: false,
            // Цвет линии.
            strokeColor: "#000000",
            // Ширина линии.
            strokeWidth: 4,
            // Коэффициент прозрачности.
            strokeOpacity: 0.5
        });

        // Добавляем ломаную на карту.
        window.myMap.geoObjects.add(myPolyline);
    }
  }

  //Обработка переноса на карте
  DragMap = (event) => {
      let arr = this.state.dots.map(
        (el) => {
          if(event.get('target').properties._data.balloonContent===el.name){
            return el={
              ...el,
              x:event.get('target').geometry.getCoordinates()[0],
              y:event.get('target').geometry.getCoordinates()[1]
            }
          } else return el
        }
      )

      this.setState(state => ({...state, dots:arr}))
  }

  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
  }
  
  handleLoad() {
    window.ymaps.ready(() => {
        this.myMap = new window.ymaps.Map('map', {center: [55.75, 37.57], zoom: 12}, {
        searchControlProvider: 'yandex#search'});
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
          dots={this.state.dots}
          AddDots={this.AddDots}
          AddPolyline={this.AddPolyline}
          />
      </div>
    )
  }
}



export default App
