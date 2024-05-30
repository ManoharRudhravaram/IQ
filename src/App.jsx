// import React, { useEffect, useState } from 'react'

// function App() {
//   let [time, setTime] = useState({ mins: 0, secs: 0, milli: 0 });
//   let [toggle, setToggle] = useState(false);

//   useEffect(() => {
//     let id;
//     if (toggle) {
//       id = setInterval(() => {
//         setTime((pre) => {
//           let millisecs = pre.milli + 1;
//           let minutes = pre.mins;
//           let seconds = pre.secs;
//           if (millisecs >= 100) {
//             millisecs = 0;
//             seconds += 1
//           }
//           if (seconds > 59) {
//             seconds = 0;
//             minutes += 1;
//           }
//           return { ...pre, mins: minutes, secs: seconds, milli: millisecs }
//         })
//       }, 10)
//       return () => {
//         clearInterval(id)
//       }
//     }
//   }, [time, toggle])

//   function resetHandler() {
//     setTime({ mins: 0, secs: 0, milli: 0 })
//     setToggle(false)
//   }
//   return (
//     <div>
//       <h1>timer</h1>
//       <button onClick={() => { setToggle(true) }}>start</button><br />
//       <button onClick={() => { setToggle(false) }}>stop</button><br />
//       <button onClick={resetHandler}>reset</button>
//       <div>
//         <p>{time.milli}</p>
//         <p>{time.secs}</p>
//         <p>{time.mins}</p>
//       </div>
//     </div>
//   )
// }

// export default App

import React from 'react'
import StopWatch from './assets/StopWatch'
import Filter from './assets/Filter'
import ImgUpload from './assets/ImgUpload'
import Lodash from './assets/Lodash'
import Circle from './assets/Circles'
import Debouncing from './assets/Debouncing'
import Throttling from './assets/Throtlling'
import Boxes from './assets/Boxes'
import Sorting from '../Sorting'
import PropsTest from './assets/PropsTest'
import DropDown from './assets/DropDown'
import Demo from './Demo'
import Calculator from './assets/Calculator'
import API from './assets/API'
import Display from './assets/Display'
import NewPage from './assets/Bar';
// import Map from './assets/Map';
import Score from './assets/Score'

function App() {
  return (
    <>
    {/* <Display/> */}
    {/* <NewPage/>
     */}
     {/* <Map/> */}
     <Score/>
    </>
  )
}

export default App

