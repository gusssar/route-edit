import React from 'react'

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
                <div id="map" style={{width:'100%', height:'100%'}}></div>
            </div>
        )
    }
}