
import React, { useEffect, useState } from 'react'

function Demo() {
    const [inputValue, setInputValue] = useState(0);
    const [inputValues, setInputvalues]=useState([])

    const handleChange = (event) => {
        // setInputValue(event.target.value);
        const num=parseInt(event.target.value)
        setInputValue(num)
        setInputvalues(Array.from({length:num},()=>''))
    }


    useEffect(()=>{
        return()=>{}
    },[])
    
    return (
        <div>
            <input type='number' className='border border-black' value={inputValue} onChange={handleChange} />
            <p>Typed..:{inputValue}</p>
            {
                inputValues.map((value,index)=>{
                    return <input type="text" key={index} className=' border border-black'/>
                })
            }
        </div>

    )
}

export default Demo