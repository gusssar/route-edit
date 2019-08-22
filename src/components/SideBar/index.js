import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

export class SideBar extends React.Component {
    onPressEnter=event=>{
        if(event.key==='Enter'){
            const currentCenter=window.myMap.getCenter();
            const item_dot={
                name: event.target.value,
                x: currentCenter[0],
                y: currentCenter[1],
            };
            event.target.value='';
            this.props.setNameDot(item_dot);
        }
    }

    onDel = el =>{
        this.props.DeleteDot(el);
    }

    DragStart = (e, idx) => {
        this.props.DragStart(e,idx);
    }

    DragOver = (idx) => {
        this.props.DragOver(idx);
    }

    DragEnd = () => {
        this.props.DragEnd();
    }

    render(){

        const { dots } = this.props;

        const item=(dots)?dots.map((el,idx)=>
            <li 
                className='sidebar__items__item'
                key={idx}>
                <div 
                    className='item__name'
                    draggable
                    onDragStart={(e)=>this.DragStart(e, idx)}
                    onDragOver={() => this.DragOver(idx)}
                    onDragEnd={this.DragEnd}
                    >
                        {el.name}
                </div>
                <div 
                    className='item__close'
                    onClick={()=>this.onDel(el)}
                    >X</div>
            </li>
        ):<div></div>

        return(
            <div className='sidebar'>
                <div className='sidebar__title'>Список точек маршрута</div>
                <input 
                    className='sidebar__input'
                    placeholder='Новая точка маршрута'
                    onKeyPress={this.onPressEnter}
                ></input>
                <ul className='sidebar__items'>
                    {item}
                </ul>
            </div>
        )
    }
}

SideBar.propType = {
    dots: PropTypes.array.isRequired,
    setNameDot: PropTypes.func.isRequired,
    DeleteDot: PropTypes.func.isRequired,
    DragStart: PropTypes.func.isRequired,
    DragOver: PropTypes.func.isRequired,
    DragEnd: PropTypes.func.isRequired,
}