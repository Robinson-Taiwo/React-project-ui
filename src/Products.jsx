import React, { useState } from 'react'
import "./Products.css"

const Products = () => {

    const [container, setContainer] = useState([])

    fetch('https://fakestoreapi.com/products?limit=12')
        .then(res => res.json())

        .then(data => {
            setContainer(data)
        })
        .catch(err => { console.error(err) })


    // console.log(container)

    return (
        <section className='all' id='products' >
            <h1>check out our products</h1>
            <div className="top">
                <select name="category" id="select">
                    <option value="">category</option>
                    <option value="">category</option>
                    <option value="">category</option>
                    <option value="">category</option>
                </select>
                <input type="text" placeholder='search' />
            </div>


<div className="card">

            { container.map( (data) =>{
              return  <div className='item' key={data.id}> 

              <img className='pics' src={data.image} alt="all" />
              <li> {data.title} </li>

              {/* <li> {data.description} </li> */}

              <li> {data.price} </li>
              <li>rate: {data.rating.rate} count:{data.rating.count} </li>
              <li> {data.category} </li>

               </div>
            })}

</div>


        </section>
    )
}

export default Products