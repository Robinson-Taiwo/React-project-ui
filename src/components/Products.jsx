import React, { useState, useEffect } from 'react'
import "./Products.css"

const Products = () => {

    const [container, setContainer] = useState([])






    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=8').then((res) => res.json())
            .then((data) => {
                setContainer(data)
            })
            .catch((error) => console.log(error));
    }, []

    )

    return (
        <section className='all' id='products' >
            <h1 className='k'>check out our products</h1>
            <div className="top">
                <select name="category" id="select">
                    <option value="" >Electronic</option>
                    <option value="jewelery" >jewelery</option>
                    <option value="">men's clothing</option>
                    <option value="">women's clothing</option>
                </select>
                <input type="text" placeholder='search' />
            </div>


            <div className="card">

                {container.map((data) => {
                    return <div className='item' key={data.id}>

                        <img className='pics' src={data.image} alt="all" />
                        <li> <span>Title:</span> {data.title} </li>

                        {/* <li> {data.description} </li> */}

                        <li>  <span>Price:</span> {data.price} </li>
                        <li><span>Rate:</span> {data.rating.rate} count:{data.rating.count} </li>

                    </div>
                })}

            </div>


        </section>
    )
}

export default Products