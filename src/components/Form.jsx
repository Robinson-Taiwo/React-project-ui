import React from 'react'
import "./Form.css"

const Form = () => {



    const handle = (e) => {
        e.preventDefault();
        const form = e.target;
        console.log(form.img.value, form.title.value);
        const newProductData = {
            title: form.title.value,
            price: form.price.value,
            description: form.description.value,
            category: 'electronic',
        };

        fetch('https://fakestoreapi.com/products', {
            method: "POST",
            body: JSON.stringify(newProductData),
        })
            .then(res => res.json())
            .then(json => console.log(json))

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