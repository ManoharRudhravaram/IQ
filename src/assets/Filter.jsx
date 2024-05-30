import React, { useEffect, useState } from 'react'

function Filter() {
  let [userData, setUserData] = useState([]);
  let [filteredData, setFilteredData] = useState([]);

  async function fetchData() {
    let res = await fetch('https://dummyjson.com/products').then((data) => {
      return data.json()
    });
    let data = await res.products;
    setUserData(data);
    setFilteredData(data);
  }

  useEffect(() => {
    fetchData()
  }, [])

  function searchHandler(e) {
    let updated = userData.filter(({ title }) => {
      return title.trim().toLowerCase().includes(e.target.value.trim().toLowerCase())
    })
    setFilteredData(updated);
  }
  function sortHandler(e) {
    let value = e.target.value;
    let updated = [...userData];
    updated.sort((a, b) => {
      if (value === 'A_Z') {
        return a.title.toLowerCase().localeCompare(b.title.toLowerCase())
      }
      if (value === 'Z_A') {
        return b.title.toLowerCase().localeCompare(a.title.toLowerCase())
      }
      if (value === 'H_L') {
        return b.price - a.price;
      }
      if (value === 'L_H') {
        return a.price - b.price
      }
    })
    setFilteredData(updated)
  }
  
  return (
    <>
      <div className=' flex justify-evenly m-2'>
        <input type="text" className=' border border-red-600' placeholder='search product' onChange={searchHandler} />
        <select onChange={sortHandler}>
          <option value="Sort">Sort</option>
          <option value="A_Z">A_Z</option>
          <option value="Z_A">Z_A</option>
          <option value="H_L">H_L</option>
          <option value="L_H">L_H</option>
        </select>
      </div>
      <div className=' grid sm:grid-cols-2 md:grid-rows-1 md:grid-cols-4 gap-1'>
        {userData.length == 0 ? Array.from({ length: 30 }, (_, i) => {
          return <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md  h-64" key={i}>
            <div className="animate-pulse">
              <div className="bg-gray-400 h-40 w-56 border mb-4"></div>
              <div className="bg-gray-300 h-3 w-3/4 mb-2"></div>
              <div className="bg-gray-300 h-2 w-1/2">
              </div>
            </div>
          </div>
        }) : (filteredData.length == 0 ? <h1>No data</h1> :
          filteredData.map((data, i) => {
            return <div className="card flex flex-col justify-evenly items-center" key={i}>
              <div className="card-body">
                <img src={data.thumbnail} alt="x" className=' w-60 h-36' />
              </div>
              <div className="card-footer bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-1 w-60 flex flex-col items-center text-white">
                <h1>{data.title}</h1>
                <h1>$ {data.price}</h1>
              </div>
            </div>
          }))
        }
      </div>
    </>
  )
}

export default Filter