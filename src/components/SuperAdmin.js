import axios from 'axios';
import React from 'react'
import {useState, useEffect} from 'react';

const SuperAdmin = () => {
const userStorage = JSON.parse(localStorage.getItem("user"))
const [users,setUsers]=useState([])

const handleRol= async (userId)=>{
    try{
       const giveRol= await axios.put(`http://localhost:8080/api/admin/giveRol/${userId}`)

    }catch(error){console.log(error)}

}

useEffect(async () => {
    try{
    const users= await axios.get(`http://localhost:8080/api/admin/${userStorage.id}`)
    setUsers(users.data)
    }catch(error){console.log(error)}
}, [])


  return (
    <div>{
        users.map((user, index)=>{
            return(
                <ul key={index}>
                <li>Name: {user.name}</li>
                <li>Surname: {user.surname}</li>
                <li>Email: {user.email}</li>
                <li>Address: {user.address}</li>
                <li>DNI: {user.dni}</li>
                <li>isAdmin: {user.isAdmin}</li>
                <button onClick={()=>{handleRol(user.id)}}>Give Rol Admin</button>
            </ul>
            )
        })
    }</div>
  )
}

export default SuperAdmin