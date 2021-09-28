import React, { useState } from 'react';

function App() {
  const [location, setLocation] = useState();
  // var watchId;
  let target = document.getElementById('target');

  const getLocalization = () => {
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
          <iframe src={`https://maps.google.com/maps?&z=15&q=${location.coords.latitude}+${location.coords.longitude}&output=embed`} width="100%" height="500"></iframe>
        )
      }
    </>
  );
}

export default App;
