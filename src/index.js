import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import getFeatures from './features';
import Sidebar from './components/Sidebar';
import DDDrawer from './components/DDDrawer';
import MAPBOX_ACCESS_TOKEN from './mapboxAccessToken';

mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
const INITIAL_COORDINATES = {
  lng: 79.1695,
  lat: 23.1263,
  zoom: 4.09
};

class Application extends React.Component {
  constructor(props) {
  super(props);
    this.state = {
      ...INITIAL_COORDINATES,
      drawerData: null,
      drawerOpen: false,
      markers: {
        'Tamil Nadu': true,
        'Andhra Pradesh': true,
        'Kerala': true,
        'Gujarat': true,
        'Uttar Pradesh': true,
        'Uttarakhand': true,
        'Nepal': true,
        'Celestial Abode': true,
      }
    }
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.handleMarkersChange = this.handleMarkersChange.bind(this);
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    this.map.on('move', () => {
      this.setState({
        lng: this.map.getCenter().lng.toFixed(4),
        lat: this.map.getCenter().lat.toFixed(4),
        zoom: this.map.getZoom().toFixed(2)
      });
    });

    this.map.on('load', () => {
      this.map.addSource('places', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': getFeatures(this.state.markers)
        }
      });

      this.map.addLayer({
        'id': 'places',
        'type': 'circle',
        'source': 'places',
        'paint': {
          // make circles larger as the user zooms from z12 to z22
          'circle-radius': {
            'base': 1.75,
            'stops': [
              [12, 6],
              [22, 180]
            ]
          },
          // color circles by ethnicity, using a match expression
          // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-match
          'circle-color': [
            'match',
            ['get', 'state'],
            'Tamil Nadu',
            '#fbb03b',
            'Andhra Pradesh',
            '#223b53',
            'Kerala',
            '#e55e5e',
            'Uttar Pradesh',
            '#3bb2d0',
            'Uttarakhand',
            'green',
            'Nepal',
            'purple',
            'Gujarat',
            'blue',
            /* other */ 'brown'
          ]
        }
      });

      // Add a layer showing the places.
      // map.addLayer({
      //   'id': 'places',
      //   'type': 'symbol',
      //   'source': 'places',
      //   'layout': {
      //     'icon-image': '{icon}-15',
      //     'icon-allow-overlap': true,
      //   },
      //   'paint': {
      //     'icon-color': '#f47c10'
      //   }
      // });

      // Use the data associated with the feature and use it to pass the data to the sidebar
      this.map.on('click', 'places', (e) => {
        e.preventDefault();
        const data = JSON.parse(e.features[0].properties.ddData);

        this.setState({
          drawerData: data,
          drawerOpen: true
        });
      });

      // Change the cursor to a pointer when the mouse is over the places layer.
      this.map.on('mouseenter', 'places', () => {
        this.map.getCanvas().style.cursor = 'pointer';
      });

      // Change it back to a pointer when it leaves.
      this.map.on('mouseleave', 'places', () => {
        this.map.getCanvas().style.cursor = '';
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.markers !== this.state.markers) {
      this.map.getSource('places').setData({
        'type': 'FeatureCollection',
        'features': getFeatures(this.state.markers)
      });
    }
  }

  handleDrawerClose() {
    this.setState({ drawerData: null, drawerOpen: false });
  }

  handleMarkersChange(state) {
    this.setState({ markers: {...state} });
  }

  render() {
    return (
      <div>
        <Sidebar markers={this.state.markers} handleMarkersChange={this.handleMarkersChange} />
        <DDDrawer
          data={this.state.drawerData}
          drawerOpen={this.state.drawerOpen}
          handleDrawerClose={this.handleDrawerClose}
        />
        <div ref={el => this.mapContainer = el} className='mapContainer' />
      </div>
    )
  }
}

ReactDOM.render(<Application />, document.getElementById('app'));
