
import React from 'react'
import { Button, Container, Table } from 'react-bootstrap'
//import { useContext } from 'react'
//import { AuthContext } from '../context/AuthContext'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Profile = () => {

  const [users,setUsers]=useState([])

  const userStorage = JSON.parse(localStorage.getItem("user"));

  useEffect(async () => {
    try{
    const users= await axios.get(`http://localhost:8080/api/users/${userStorage.id}`)
    console.log(users);
    setUsers(users.data)
    }catch(error){console.log(error)}
}, [])

  return (
    <div>
      <Container>
        <h1>My Profile</h1>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>E-mail</th>
              <th>DNI</th>
              <th>Address</th>
              
            </tr>
          </thead>
          <tbody>
            {
                <tr>
                  <td>{users.name}</td>
                  <td>{users.surname}</td>
                  <td>{users.email}</td>
                  <td>{users.dni}</td>
                  <td>{users.address}</td>
            
                  <td>
                  <Link to="/profile_edit"><Button>EDIT</Button></Link></td>
                </tr>
              
            }

          </tbody>

        </Table>

      </Container>

    </div>
  )
}

export default Profile