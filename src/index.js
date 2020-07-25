import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import { data } from './dd';
import { MAPBOX_ACCESS_TOKEN } from './mapboxAccessToken';

mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
class Application extends React.Component {
  constructor(props) {
  super(props);
    this.state = {
      lng: 79.1695,
      lat: 23.1263,
      zoom: 4.09
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    data.forEach((datum) => {
      new mapboxgl.Marker()
        .setLngLat([datum.lng, datum.lat])
        .addTo(map);
    });

    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }

  render() {
    return (
      <div>
        <div className='sidebarStyle'>
          <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
        </div>
        <div ref={el => this.mapContainer = el} className='mapContainer' />
      </div>
    )
  }
}

ReactDOM.render(<Application />, document.getElementById('app'));
