import React, { useEffect, useState } from 'react';

function Debouncing() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [isThrottled, setIsThrottled] = useState(false);

  async function getData() {
    let { products } = await fetch('https://dummyjson.com/products').then(data => data.json());
    setData(products);
    setFilterData(products);
  }

  useEffect(() => {
    getData();
  }, []);

  function changeHandler(e) {
    if (!isThrottled) {
      setIsThrottled(true);
      setTimeout(() => {
        setIsThrottled(false);
      }, 1000);

      const newData = data.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      console.log(newData);
      setFilterData(newData);
    }
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
