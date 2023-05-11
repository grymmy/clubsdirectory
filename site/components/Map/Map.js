import { ClubMarker } from './ClubMarker'
import { Assemble } from './Assemble'
import { Epoch } from './Epoch'
import { ZephyrStop } from './ZephyrStop'
import { ZephyrStart } from './ZephyrStart'
import { UserLocationDot } from './UserLocationDot'
import ZephyrPath from './ZephyrPath'
import { useEffect, useRef } from 'react';
import { MapContainer, Tooltip, CircleMarker, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import { Text, Link, Button, Box } from 'theme-ui'

function Map({ clubs, userLongitude, userLatitude, search, setSelectedClubs, selectedClubs, recentlyCopied, setRecentlyCopied }) {
  const mapRef = useRef(null);

  const ZephyrPos = [
    [44, -73],  // Burlington, VT (44.4765° N, 73.2123° W)
    [40, -74],  // New York City, NY (40.7128° N, 74.0060° W)
    [41, -87],  // Chicago, IL (41.8781° N, 87.6298° W)
    [39, -105], // Denver, CO (39.7392° N, 104.9903° W)
    [37, -122], // San Francisco, CA (37.7749° N, 122.4194° W)
    [34, -118]  // Los Angeles, CA (34.0522° N, 118.2437° W)
  ]
  useEffect(() => {
    // Ensuring Leaflet's CSS is applied only on the client side.
    import('leaflet/dist/leaflet.css');
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    flyToSearchOnChange(map)
  }, [clubs]);
  return (
    <MapContainer  ref={mapRef} style={{width: "100%", height: "600px"}} center={[37.0902, -95.7129]} zoom={5}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
      />
{Array.isArray(clubs) && clubs.map((club) => (
<ClubMarker club={club} leaflet={leaflet} console={console} clubs={clubs} encodeURIComponent={encodeURIComponent} location={location} navigator={navigator} setRecentlyCopied={setRecentlyCopied} recentlyCopied={recentlyCopied} selectedClubs={selectedClubs} setSelectedClubs={setSelectedClubs}/>
))}

<Assemble leaflet={leaflet}/>
<Epoch leaflet={leaflet}/>
<ZephyrStart pos={ZephyrPos} leaflet={leaflet}/>

<ZephyrStop pos={ZephyrPos} leaflet={leaflet}/>
<ZephyrPath pos={ZephyrPos}/>
{userLongitude !== null && userLatitude !== null && (
<UserLocationDot userLatitude={userLatitude} userLongitude={userLongitude}/>
)}


    </MapContainer>
  );

  function flyToSearchOnChange(map) {
    if (map && clubs.length > 0 && search != "") {
      const { latitude, longitude } = clubs[0].geo_data.coordinates
      map.flyTo([latitude, longitude], 10)
    }
  }
}

export default Map;
