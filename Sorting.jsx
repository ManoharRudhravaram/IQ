import React, { useEffect, useState } from 'react'

function Sorting() {
    let [data, setData] = useState([])
    async function getData() {
        let { products } = await fetch('https://dummyjson.com/products').then((data) => data.json())
        setData(products)
    }
    useEffect(() => {
        getData()
    }, [])
    function sortHandler(e) {
        let { value } = e.target;
        if (value == 'a-z') {
            let x = [...data].sort((a, b) => {
                return a.title
                    .trim()
                    .toUpperCase()
                    .localeCompare(b.title.trim().toUpperCase());
            })
            setData(x)
        }
        if (value == 'z-a') {
            let x = [...data].sort((a, b) => {
                return b.title
                    .trim()
                    .toUpperCase()
                    .localeCompare(a.title.trim().toUpperCase());
            })
            setData(x)
        }
        if (value == 'h-l') {
            let x = [...data].sort((a, b) => {
                return b.price-a.price
            })
            setData(x)
        }if (value == 'l-h') {
            let x = [...data].sort((a, b) => {
                return a.price-b.price
            })
            setData(x)
        }
    }
    return (
        <div>
            <div className="m-5 flex items-center justify-center">
                <select className='p-5 border border-black' onChange={sortHandler}>
                    <option value="a-z">a-z</option>
                    <option value="z-a">z-a</option>
                    <option value="h-l">h-l</option>
                    <option value="l-h">l-h</option>
                </select>
            </div>
            {
                data?.length > 0 && data?.map(({ title, price }, i) => {
                    return <div className='border' key={i}>
                        <h1>{title}</h1>
                        <h5>{price}</h5>
                    </div>
                })
            }
        </div>
    )
}

export default Sorting