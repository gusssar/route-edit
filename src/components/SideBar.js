import React from 'react'
import PropTypes from 'prop-types'

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
            <div 
                key={idx}
                draggable
                onDragStart={(e)=>this.DragStart(e, idx)}
                onDragOver={() => this.DragOver(idx)}
                onDragEnd={this.DragEnd}
                >
                    {el.name}
                    <button onClick={()=>this.onDel(el)}>удалить {el.name}</button>
            </div>
        ):<div></div>

        return(
            <div className='sidebar'>
                <input 
                    placeholder='input'
                    onKeyPress={this.onPressEnter}
                ></input>
                {item}
            </div>
        )
    }
}

SideBar.propType = {
    setNameDot : PropTypes.func.isRequired,
    DeleteDot : PropTypes.func.isRequired,
    dots: PropTypes.array.isRequired,
}