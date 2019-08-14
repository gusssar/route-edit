import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Input } from '../Input/index';

import './index.css';

class SideBar extends Component {

    render(){

        // const test_arr=['первый', 'второй', 'третий'];

        // const DotList = test_arr.map((el)=>
        //     <div className='side__item'>{el}</div>
        // );
        const el='privet';
        const DotList = <div className='side__item'>{el}</div>

        return(
            <div className='app__sidebar'>
                <Input/>
                {DotList}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {};
}

export default connect(mapStateToProps)(SideBar);