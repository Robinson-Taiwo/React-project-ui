import React, { useEffect, useState } from 'react'

const User = () => {
    const [users, setUsers] = useState([])


    useEffect(() => {
        fetch('https://fakestoreapi.com/users')
            .then(res => res.json())
            .then(json => console.log(json))
            .then(data => setUsers(data))
    }, []
    )

    return (
        <div className='user'>
            {users.map((user) => {
                return (
                    <div>
                        <div>{user.name.firstname} {user.name.lastname}</div>
                        <div>{user.email}</div>
                        <div>{user.phone}</div>
                        <div>{user.username}</div>

                    </div>
                )


            })}


        </div>
    )
}

export default User