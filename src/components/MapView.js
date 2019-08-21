import React from 'react'
import PropTypes from 'prop-types'

export class MapView extends React.Component {

    render(){

        return(
            <div className='mapview'>
                <div id="map" style={{width:'100%', height:'100%'}}></div>
            </div>
        )
    }
}

MapView.propTypes = {
    // nameDot: PropTypes.string.isRequired,
}