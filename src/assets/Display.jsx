import React, { useEffect, useState } from 'react';

function Display() {
    const [products, setProducts] = useState([]);
    const [converted, setConverted] = useState(false);

    useEffect(() => {
        async function getData() {
            try {
                let data = await fetch('https://dummyjson.com/products');
                let { products } = await data.json();
                setProducts(products);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        getData();
    }, []);

    function priceHandler() {
        if (!converted) {
            let newData = products.map((item) => {
                return { ...item, price: item.price * 80 };
            });
            setProducts(newData);
            setConverted(true);
        }
    }

    return (
        <div className='text-center'>
            <button onClick={priceHandler}>Convert</button>
            <table>
                <thead>
                    <tr>
                        <th className='text-3xl'>Title</th>
                        <th className='text-3xl'>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length > 0 &&
                        products.map(({ title, price }, i) => {
                            return (
                                <tr key={i}>
                                    <td>{title}</td>
                                    <td>{!converted ? `$ ${price}` : `rs ${price}`}</td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
    );
}

export default Display;