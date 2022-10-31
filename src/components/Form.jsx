import React from 'react'
import "./Form.css"

const Form = () => {

    fetch('https://fakestoreapi.com/products', {
        method: "POST",
        body: JSON.stringify(
            {
                title: 'test product',
                price: 13.5,
                description: 'lorem ipsum set',
                image: 'https://i.pravatar.cc',
                category: 'electronic'
            }
        )
    })
        .then(res => res.json())
        .then(json => console.log(json))


const handle=(e)=>{
e.preventDefault()
return console.log( "clicked", e.target)
}

    return (
        <section className='user' id='user'>
            <form className='form' onSubmit={handle}>
                <h2 className='add'>Add products</h2>
                <span className='gap'>Title:<input type="text" name='title' required />  </span>
                <span className='gap'> Price: <input type="text" name='price' required />  </span>
                <span className='gap'> category: <select name="category2" id="">
                <option value="">category</option>
                    <option value="">category</option>
                    <option value="">category</option>
                    <option value="">category</option>
                    </select> </span>
                <span className='gap'> image: <input type="file" required /> </span>
                <button type='submit' >Add product</button>

                <section className="words">
                    <h1>ADD YOUR PRODUCT WITH EASE</h1>

                </section>

            </form>

        </section>
    )
}

export default Form