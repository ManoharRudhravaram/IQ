import React, { useState } from 'react'

function App() {
  let [count, setCount] = useState(0);
  let [color, setColor] = useState(Array(count).fill(false))
  
  function increaseCount() {
    setCount(count + 1)
  }
  function setColorfn(i) {
    let newColors = [...color]
    newColors[i] = !newColors[i]
    setColor(newColors)
  }
  console.log(color);
  return (
    <div>
      <button onClick={increaseCount} className='p-2 bg-yellow-400 rounded-md'>Add Circle</button>
      {
        [...Array(count)].map((_, i) => {
          return <div id={i} className="" style={{ border: '1px solid', borderRadius: "100%", height: "100px", width: "100px", backgroundColor: color[i] ? 'red' : 'blue' }} onClick={() => setColorfn(i)}>
          </div>
        })
      }
    </div>
  )
}

export default App