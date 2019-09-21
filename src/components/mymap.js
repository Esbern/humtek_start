import React from "react"

import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

class MyMap extends React.Component {
  state = {
    lat: 55.65321,
    lng: 12.1412,
    zoom: 13,
  }

  render() {
    //const { options } = this.props
    const position = [this.state.lat, this.state.lng]
    if (typeof window !== 'undefined') {
      return (
         <Map style={{ height: 300 }} center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
          </Marker>
        </Map>
      )
    }
    return null
  }
}
 export default MyMap
