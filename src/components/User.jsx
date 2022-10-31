import React, { useState, useEffect } from 'react'
import "./User.css"

const User = () => {
    const [person, setPerson] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/users?limit=4')
            .then(res => res.json())
            .then((data) => {
                setPerson(data)
            })
            .catch((error) => console.log(error));
    }, []
    )

    return (

        <section className='user-1' id='workers'>
            <h1 className='big'>SEE SOME OF OUR WORKERS DETAILS</h1>

            <div className="rep">
                {person.map((data) => {
                    return <div className='use' key={data.id}>
                        <li className='bu'> <span >USERNAME:</span> {data.username} </li>
                        <li className='bu'>  <span>FULL NAME:</span> {data.name.firstname} {data.name.lastname}  </li>
                        <li className='bu'> <span>E-MAIL:</span> {data.email} </li>

                    </div>
                })}

            </div>



        </section>






    )
}

export default User