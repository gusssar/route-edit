import React from 'react';
import { connect } from 'react-redux';
import { setNameDot } from '../store/actions/InputActions'
// import { SideBar } from '../components/SideBar/index';
import { SideBar } from '../components/SideBar.js';


class SideBarContainer extends React.Component {

    render() {
        const { nameDot } = this.props
        return(
            <SideBar 
                nameDot = {nameDot}
            />
        )
    }
}

const mapStateToProps = store => {
    return {
        nameDot : store.nameDot
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setNameDot: nameDot => dispatch(setNameDot(nameDot))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SideBarContainer)