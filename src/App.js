import React, { useState } from 'react';

function App() {
  const [location, setLocation] = useState();
  // var watchId;
  let target = document.getElementById('target');

  let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    var crd = pos.coords;
  
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  const getLocalization = (success, error, options) => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (location) {
        // appendLocation(location, 'fetched');
        console.log(location);
        setLocation(location);
      });
    } else {
      target.innerText = 'Geolocation API not supported.';
    }
  };

  const showLocation = () => {
    navigator.geolocation.getCurrentPosition(location => { console.log(location) })
  }
  return (
    <>
      <button onClick={() => getLocalization()}>
        Localização
      </button>

      <button onClick={() => showLocation()}>
        show location
      </button>
      <div id="target">

      </div>
      {
        location !== undefined && (
          <iframe src={`https://maps.google.com/maps?&z=15&q=${location.coords.latitude},${location.coords.longitude}&output=embed`} width="100%" height="500"></iframe>
        )
      }
    </>
  );
}

export default App;
