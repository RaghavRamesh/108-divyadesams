import data from './data';

const features = data.map((datum) => {
  return {
    'type': 'Feature',
    'properties': {
      'description': `${datum.nameAndLocation}`,
      'icon': 'town-hall'
    },
    'geometry': {
      'type': 'Point',
      'coordinates': [datum.coordinates.lng, datum.coordinates.lat]
    }
  };
});

export default features;
