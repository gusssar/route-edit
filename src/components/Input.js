import React from 'react'
import PropTypes from 'prop-types'

export class Input extends React.Component {
    onPressEnter=event=>{
        if(event.key==='Enter'){
            const nameDot=event.target.value;
            event.target.value='';
            this.props.setNameDot(nameDot);
        }
    }
    render(){
        return(
            <div>
                <input 
                    placeholder='input'
                    onKeyPress={this.onPressEnter}
                ></input>
            </div>
        )
    }
}

Input.propType = {
    setNameDot : PropTypes.func.isRequired,
}