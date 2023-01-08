import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react'
import "./profile.css"


function Profile() {
    const [users, setUsers] = useState([]);

    const UsersData = async () => {
        await axios.get(`https://panorbit.in/api/users.json`)
            .then(res => {
                console.log(res.data.users);
                setUsers(res.data.users);
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        UsersData()
    }, []);

    return (

        <div className='profile ' >

            <div className='profile1'>
                {users.filter(user => user.id === 1).map((user) => {
                    return (
                        <>
                            <div className='profile2'>
                                <img src="https://media.licdn.com/dms/image/D5603AQHWOCecX4zUDA/profile-displayphoto-shrink_800_800/0/1669226635445?e=1678320000&v=beta&t=tuJfJrQIhzghxkyO3M2Cv9Klch-3xt8DPNhqLnZgoHQ" alt="img2" style={{ width: "150px", height: "150px", borderRadius: "50%", objectFit: "cover" }} />
                                <br />
                                <h4>{user.name}</h4>
                                <p> username: {user.username}</p>
                                <p> e-mail: {user.email}</p>
                                <p> Phone: {user.phone}</p>
                                <p> Website: {user.website}</p>
                                <hr />
                                <h4>company</h4>
                                <p>Name: {user.company.name}</p>
                                <p>catchphrase: {user.company.catchPhrase}</p>
                                <p>bs: {user.company.bs}</p>
                            </div>
                            <div className='profile3'>
                                <h4>Address</h4>
                                <p>street: {user.address.street}</p>
                                <p>suite: {user.address.suite}</p>
                                <p>city: {user.address.city}</p>
                                <p>zipcode: {user.address.zipcode}</p>
                                <img src="https://www.google.com/maps/vt/data=xPSq6zp9VkkqQa-zpzu0kpdHUrl9QrUP7EiO1EM24BTQPyiL2G7ZVKaPR7s2vN7i0w8mKfEXlRpl_FNmOOqSKm80v9kGNF3vYP2wU0T5aG4avCjuYixIVKilzy6rZQSIejEc7WTC1PfTOC17Pip8UL4TwUfhqKXWq4DOSkd1M_iph5nxkUAaViwW0DUstQHQgU0ekrGUyJH6HoZaSDQXidVdrQTeoAN3-e6JYtEK2juWFEWTXw4OzJCF" alt="img3" style={{ width: "200px", height: '200px' }} />
                                <p>lat: {user.address.geo.lat}  lng: {user.address.geo.lng}</p>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Profile;