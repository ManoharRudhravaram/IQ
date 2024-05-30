import React, { useEffect, useState } from 'react'

function App() {
  let [text,setText]=useState('');
  let [divText,setDivtext]=useState(' ');
  useEffect(()=>{
    setDivtext((pre)=>{
      let toggleCase=text.split('').map((e,i)=>{
        if(i%2==0){
          return e.toUpperCase()
        }
        else{
          return e.toLowerCase()
        }
      })
      return toggleCase
    })
  },[text])
  return (
    <div>
      <input type="text" onChange={((e)=>{
        setText(e.target.value)
      })}/>
      <div>
        {divText}
      </div>
    </div>
  )
}

export default App