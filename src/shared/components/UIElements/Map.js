import React, {useRef, useEffect} from 'react'

import './Map.css'

const Map = props => {
    const mapRef = useRef()
    const { zoom } = props
    const center = {
        lat: parseFloat(props.center.lat),
        lng: parseFloat(props.center.lng)
    } 
    useEffect(() => {
        const map = new window.google.maps.Map(mapRef.current, {
            center: center,
            zoom: zoom
        })

        new window.google.maps.Marker({position: center, map: map})
    }, [center, zoom])

    return (
        <div ref={mapRef} className={`map ${props.className}`} style={props.style}>

        </div>
    )
}

export default Map