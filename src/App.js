import React from 'react';
import styled from 'styled-components';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const MapContainer = styled.div`
  width: 600px;
  height: 400px;
`;

const center = {
  lat: -34.397,
  lng: 150.644,
};

const Map = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCNmKqak5yK_72la_KG-OUICwUxkAxwP60">
      <Container>
        <MapContainer>
          <GoogleMap mapContainerStyle={{ width: '100%', height: '100%' }} center={center} zoom={8} />
        </MapContainer>
      </Container>
    </LoadScript>
  );
};

function App() {
  return <Map />;
}

export default App;
