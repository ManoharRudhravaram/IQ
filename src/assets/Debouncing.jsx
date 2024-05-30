import React, { useEffect, useState } from 'react';

function Debouncing() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  async function getData() {
    let { products } = await fetch('https://dummyjson.com/products').then((data) =>
      data.json()
    );
    setData(products);
    setFilterData(products);
  }

  useEffect(() => {
    getData();
  }, []);

  function changeHandler(e) {
    let timeoutId
    clearTimeout(timeoutId); // Clear previous timeout
    timeoutId = setTimeout(() => {
      const newData = data.filter((item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFilterData(newData);
    }, 1000);
  }

  return (
    <div>
      <input
        type="text"
        onChange={changeHandler}
        className="border border-black"
      />
      {filterData.map(({ title }) => (
        <h1 key={title}>{title}</h1>
      ))}
    </div>
  );
}

export default Debouncing;
