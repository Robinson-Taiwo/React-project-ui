import React from 'react'
import "./Landing.css"

const Landing = () => {
    return (
        <div className='main'>

            <header>

                <div>
                    <a href="/" id="logo"> <i className="fa-solid fa-fire-flame-curved"></i> ShopperWeb</a>
                </div>

                <nav >
                    <a href='#products'>products</a>
                    <a href='#form'>Add products</a>
                    <a href='#workers'>See users</a>
                </nav>

            </header>

            <section className="container">

                <section className="first">
                    <h1 className='head'>WELCOME TO </h1>
                    <h2 className='title'>SHOPPER WEB</h2>
                    <p>We satisfy all your needs...</p>
                    <button className='but'>Explore</button>
                </section>

                <section className="second">

                    <div className='img1'></div>
                    <div className='img2'></div>
                    <div className='img3'></div>
                    <div className='img4'></div>


                </section>

            </section>


        </div>
    )
}

export default Landing