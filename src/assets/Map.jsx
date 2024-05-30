// // import React from 'react';
// // import { Map, Marker } from 'pigeon-maps';

// // const FullScreenMap = () => {
// //   return (
// //     <div style={{ width: '99vw', height: '99vh' }}>
// //       <Map defaultCenter={[51.505, -0.09]} defaultZoom={3} width="100%" height="100%">
// //         <Marker anchor={[51.505, -0.09]} />
// //       </Map>
// //     </div>
// //   );
// // };

// // export default FullScreenMap;

// // import React from 'react';
// // import { Map, Marker } from 'pigeon-maps';

// // const FullScreenMapWithCards = () => {
// //   return (
// //     <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
// //       {/* Map */}
// //       <Map defaultCenter={[51.505, -0.09]} defaultZoom={2} width="100%" height="100%">
// //         {/* Marker(s) */}
// //         <Marker anchor={[51.505, -0.09]} />
// //         {/* Transparent card */}
// //         <div style={{ position: 'absolute', top: '50px', left: '50px', backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '20px', borderRadius: '10px', border: '2px solid #000', zIndex: 100 }}>
// //           <h2>Card 1</h2>
// //           <p>Card content...</p>
// //         </div>
// //       </Map>
// //     </div>
// //   );
// // };

// // export default FullScreenMapWithCards;

// import React from 'react';
// import { Map, Marker } from 'pigeon-maps';


// const MockData = [
//   { cityName: 'Cairo', latitude: 30.0444, longitude: 31.2357, uv: 2000, pv: 9800 },
//   { cityName: 'Casablanca', latitude: 33.5731, longitude: -7.5898, uv: 1500, pv: 7500 },
//   { cityName: 'Algiers', latitude: 36.7538, longitude: 3.0588, uv: 1800, pv: 8500 },
//   // Add more cities as needed  
// ];

// const NorthAfricanMap = () => {
//   return (
//     <div className=' bg-red-400'>
//     <Map defaultCenter={[30, 0]} defaultZoom={3}  height={"100vh"} width={"100vw"}>
//       {MockData.map(city => (
//         <Marker key={city.cityName} anchor={[city.latitude, city.longitude]}>
//           {/* <Tooltip>{`${city.cityName} - UV: ${city.uv}, PV: ${city.pv}`}</Tooltip> */}
//         </Marker>
//       ))}
//     </Map>
//       </div>
//   );
// };

// export default NorthAfricanMap;

import React, { useState } from 'react';

function Map() {
  const [colors, setColors] = useState(Array.from({ length: 5 }).fill(""));

  function colorHandler(i) {
    const newColors = [...colors]; 
    newColors[i] = newColors[i] === "" ? "bg-cyan-600" : ""; 
    setColors(newColors); 
  }

  return (
    <div>
      {Array.from({ length: 5 }).map((_, i) => (
        <button key={i} className={` ${colors[i]} border border-red-600 p-2 m-1 rounded-md`} onClick={() => colorHandler(i)}>click</button>
      ))}
    </div>
  );
}

export default Map;

export default Map