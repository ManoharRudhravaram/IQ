import React, { useState } from 'react'

function DropDown() {
    let countries=[{name:'India',value:'IN',cities:['Delhi','Mumbai']},{name:'Pakistan',value:'PAK',cities:['Karachi','Punjab']},{name:'Bangladesh',value:'BG',cities:['Dhaka','Chittagong']},{name:'Nepal',value:'NP',cities:['Khatmandu','Jhanakpur']}]
    let [country,setCountry]=useState('')

   console.log(country);
  return (
    <div className=' flex justify-evenly items-center'>
        <select className=' border border-red-600' onChange={(e)=>{setCountry(e.target.value)}}>
            {
                countries.map(({name},i)=>{
                    return <option value={i} key={i}>{name}</option>
                })
            }
        </select>
        <select className=' border border-black'>
            <option value="">select city</option>
            {
                countries[country]?.cities?.map((item)=>{
                    return <option value={item}>{item}</option>
                })
            }
        </select>
    </div>
  )
}

export default DropDown