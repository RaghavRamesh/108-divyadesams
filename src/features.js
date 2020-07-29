import data from './data';

const features = data.map((datum) => {
  return {
    'type': 'Feature',
    'properties': {
      'ddData': datum,
      'description': `<strong>${datum.temple}</strong><br><strong>${datum.thaayaar}</strong> sametha <strong>${datum.moolavar}</strong><br>${datum.district}<br>${datum.country}`,
      'icon': 'town-hall',
      'state': datum.state ? datum.state : datum.country
    },
    'geometry': {
      'type': 'Point',
      'coordinates': [datum.coordinates.lng, datum.coordinates.lat]
    }
  };
});

export default features;
