import React, { useEffect, useState } from 'react'

function Timer() {
  let [timer, setTimer] = useState({ mins: 0, secs: 0, milli:0})
  let [toggle, setToggle] = useState(false);

  useEffect(() => {
    let id;
    if (toggle) {
      id = setInterval(() => {
        setTimer((pre) => {
          let seconds = pre.secs;
          let minutes = pre.mins;
          let millisecs=pre.milli+1;
          if(millisecs>=100){
            seconds+=1;
            millisecs=0;
          }
          if (seconds >= 60) {
            seconds = 0;
            minutes += 1;
          }
          return { ...pre,milli:millisecs, secs: seconds, mins: minutes }
        })
      }, 10)
    }

    return () => {
      clearInterval(id);
    }

  }, [toggle])

  function resetHandler() {
    setTimer({ mins: 0, secs: 0,milli:0 })
    setToggle(false)
  }


  function displayTime(value) {
    return value < 10 ? '0' + value : value;
  }

  return (
    <div className=' flex justify-center items-center'>
      <div>
        <div className=' flex justify-evenly w-16 ml-11 gap-2'>
        <h1 className=' text-xl bg-red-600 p-2 rounded-lg'>{displayTime(timer.mins)}</h1>
        <h1 className=' text-2xl'>:</h1>
        <h1 className=' text-xl bg-red-600 p-2  rounded-lg'>{displayTime(timer.secs)}</h1>
        <h1 className=' text-2xl'>:</h1>
        <h1 className=' text-xl bg-red-600 p-2  rounded-lg'>{displayTime(timer.milli)}</h1>
        </div>
        <button onClick={() => { setToggle(true) }} className=' bg-blue-600 p-1.5 rounded-md m-1 text-white hover:bg-green-600'>start</button>
        <button onClick={() => { setToggle(false) }} className=' bg-blue-600 p-1.5 rounded-md m-1 text-white hover:bg-green-600'>stop</button>
        <button onClick={resetHandler} className=' bg-blue-600 p-1.5 rounded-md m-1 text-white hover:bg-green-600'>reset</button>
      </div>
    </div>
  )
}

export default Timer