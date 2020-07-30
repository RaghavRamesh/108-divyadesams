import data from './data';

export default function getFeatures(markers) {
  return data.filter((datum) => {
    const region = datum.state ? datum.state: datum.country;
    const selectedRegions = Object.keys(markers).filter((marker => markers[marker]));
    return selectedRegions.includes(region);
  }).map((datum) => {
    const region = datum.state ? datum.state : datum.country;
    return {
      'type': 'Feature',
      'properties': {
        'ddData': datum,
        'description': `<strong>${datum.temple}</strong><br><strong>${datum.thaayaar}</strong> sametha <strong>${datum.moolavar}</strong><br>${datum.district}<br>${datum.country}`,
        'icon': 'town-hall',
        'state': region
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [datum.coordinates.lng, datum.coordinates.lat]
      }
    };
  })
}
