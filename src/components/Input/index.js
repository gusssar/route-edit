import React from 'react';
import PropTypes from 'prop-types';

export class Input extends React.Component {

    onEnterClick = e => {
        if (e.key === 'Enter') {
            console.log(e.target.value) //вывод наполнения тут
            console.log(this.props)
            const value=e.target.value;
            this.props.setTitle(value)//пока прокидываем пропс
            /**здесь добавляем значение в localStorage */
            e.target.value=''// очистка
        }
    }
    render(){
        
        return(
            <div className='sidebar__input'>
                <input
                    type='text'
                    placeholder='Введите точку машрута'
                    onKeyPress={this.onEnterClick}
                ></input>
            </div>
        )
    }
}

Input.propTypes={
    setTitle: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
}

