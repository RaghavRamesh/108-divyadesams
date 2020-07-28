import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import features from './features';
import Drawer from './Drawer';
import MAPBOX_ACCESS_TOKEN from './mapboxAccessToken';

mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
const INDIA_COORDINATES = {
  lng: 79.1695,
  lat: 23.1263,
  zoom: 4.09
};

class Application extends React.Component {
  constructor(props) {
  super(props);
    this.state = {
      ...INDIA_COORDINATES,
      drawerData: null
    }
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });

    map.on('load', () => {
      map.addSource('places', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': features
        }
      });

      // Add a layer showing the places.
      map.addLayer({
        'id': 'places',
        'type': 'symbol',
        'source': 'places',
        'layout': {
          'icon-image': '{icon}-15',
          'icon-allow-overlap': true
        }
      });

      map.on('click', 'places', (e) => {
        e.preventDefault();
        const data = JSON.parse(e.features[0].properties.ddData);

        this.setState({
          drawerData: data
        });
      });

      // Change the cursor to a pointer when the mouse is over the places layer.
      map.on('mouseenter', 'places', function() {
        map.getCanvas().style.cursor = 'pointer';
      });

      // Change it back to a pointer when it leaves.
      map.on('mouseleave', 'places', function() {
        map.getCanvas().style.cursor = '';
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
        <Drawer data={this.state.drawerData} />
      </div>
    )
  }
}

ReactDOM.render(<Application />, document.getElementById('app'));
