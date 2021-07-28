import {norgeLat, norgeLon, osloLat, osloLon} from './constants/bounds';

// Used for setting copyrights
const currentYear = new Date().getFullYear();

export const getAttributionText = (centerPoint: L.LatLng, zoomLevel: number) => {
  const copyrightString = `&copy; ${currentYear} Norkart AS`;

  var t_url = [
    `${copyrightString}/Plan- og bygningsetaten, Oslo Kommune`,
    `${copyrightString}/Geovekst og kommunene/OpenStreetMap/NASA, Meti`,
    `${copyrightString}/Geovekst og kommunene/OpenStreetMap/NASA, Meti`,
    `${copyrightString}/OpenStreetMap/EEA CLC2006`
  ];

  //Filter based on zoom levels and area
  if (zoomLevel >= 13) {
    if (zoomLevel <= 14) {
      //Level 13 & 14
      try {
        if (containsPoint(centerPoint, norgeLat, norgeLon)) {
          //Rest of Norway, Oslo has no special data at this level
          return t_url[1];
        }
      } catch (e) {}
    } else {
      try {
        if (containsPoint(centerPoint, osloLat, osloLon)) {
          // Here we give special consideration to Oslo
          return t_url[0];
        }
      } catch (e) {}

      try {
        if (containsPoint(centerPoint, norgeLat, norgeLon)) {
          //Rest of Norway
          return t_url[1];
        }
      } catch (e) {}
    }

    // If it's not either Oslo or Norway, it's the rest of Europe
    return t_url[3];
  } else {
    //Level 1-12, either Norway zoomed out or the rest of Europe
    try {
      if (containsPoint(centerPoint, norgeLat, norgeLon)) {
        return t_url[2];
      } else {
        return t_url[3];
      }
    } catch (e) {}
  }
  return copyrightString;
};

const containsPoint = (centerPoint: L.LatLng, kommuneLat: number[], kommuneLon: number[]) => {
  let j = 0;
  let t_polySides = kommuneLat.length;
  let t_oddNodes = false;
  for (let i = 0; i < t_polySides; i++) {
    j++;
    if (j === t_polySides) {
      j = 0;
    }
    if (
      (kommuneLon[i] < centerPoint.lng && kommuneLon[j] >= centerPoint.lng) ||
      (kommuneLon[j] < centerPoint.lng && kommuneLon[i] >= centerPoint.lng)
    ) {
      if (
        kommuneLat[i] +
          ((centerPoint.lng - kommuneLon[i]) / (kommuneLon[j] - kommuneLon[i])) * (kommuneLat[j] - kommuneLat[i]) <
        centerPoint.lat
      ) {
        t_oddNodes = !t_oddNodes;
      }
    }
  }
  return t_oddNodes;
};
