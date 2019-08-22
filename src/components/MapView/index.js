import React from 'react';

import './index.css';

export class MapView extends React.Component {

    shouldComponentUpdate(nextProps){
        //предварительная очистка всего поля
        window.myMap.geoObjects.removeAll();
        
        //добавление точек и ломаной
        nextProps.AddDots(nextProps.dots);
        nextProps.AddPolyline(nextProps.dots);

        return(nextProps===this.props)?false:true;
    }

    render(){

        return(
            <div className='mapview'>
                <div id="map"></div>
            </div>
        )
    }
}