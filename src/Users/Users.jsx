import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Users = () => {
    const [dataUsers, setdataUsers] = useState([])
    const getUsers = async () => {
        try {
            const respons = await axios.get("http://localhost:3000/users")
            setdataUsers(respons.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
      getUsers()
    }, [])
    

  return (
    <>
    {
        dataUsers.map((user) => (
            <>
            <h2>{user.id}</h2>
            <p>{user.name}</p>
            <p>{user.lastName}</p>
            <p>{user.age}</p>
            <p>{user.pasword}</p>
            </>

        ) )
    }
    </>
  )
}

export default Users