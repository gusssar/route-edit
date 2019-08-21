import React from 'react'
import PropTypes from 'prop-types'

export class SideBar extends React.Component {
    onPressEnter=event=>{
        if(event.key==='Enter'){
            const item_dot={
                name: event.target.value,
                x:'1',
                y:'2',
            };
            event.target.value='';
            this.props.setNameDot(item_dot);
        }
    }

    onDel = el =>{
        this.props.DeleteDot(el);
    }

    render(){

        const { dots } = this.props;
        console.log('dots',dots)

        const item=(dots)?dots.map((el,idx)=>
            <div 
                key={idx}
                >
                    {el.name}
                    <button onClick={()=>this.onDel(el)}>удалить {el.name}</button>
            </div>
        ):<div></div>

        return(
            <div>
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