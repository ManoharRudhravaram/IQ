import React, { useState } from 'react'

function Boxes() {
    let [boxes, setBoxes] = useState(Array(6).fill('green'))
    let [totalBoxes,setTotalBoxes]=useState([])
    function changeColor(i){
        let newBoxes=[...boxes]
        newBoxes[i]='red'
        setBoxes(newBoxes)
        setTotalBoxes([...totalBoxes,i])
        if(totalBoxes.length==boxes.length-1){
            setTimeout(() => {
                setBoxes(Array(6).fill('green'))
                setTotalBoxes([])
            }, 1000);
        }
    }
    return (
        <>
            {
                boxes.map((color,i) => {
                    return <div key={i} className=' w-20 h-20 border mt-5' style={{backgroundColor:color}} onClick={()=>{
                        changeColor(i)
                    }}></div>
                })
            }
        </>
    )
}

export default Boxes