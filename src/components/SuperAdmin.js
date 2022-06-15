import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { ImSearch } from 'react-icons/im';
import useInput from '../hooks/useInput';
import { Button, Container, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router';
import { success } from '../hooks/Alerts'

const SuperAdmin = () => {
  const userStorage = JSON.parse(localStorage.getItem('user'));
  const [users, setUsers] = useState([]);
  const input = useInput();
    const navigate = useNavigate()

  const handleRol = async (userId, userAdmin) => {
    
    try {
      userAdmin
        ? await axios.put(
            `http://localhost:8080/api/admin/takeRol/${userStorage.id}/${userId}`
          )
        : await axios.put(
            `http://localhost:8080/api/admin/giveRol/${userStorage.id}/${userId}`
          );
          success()
      const users = await axios.get(`http://localhost:8080/api/admin/${userStorage.id}`)
      setUsers(users.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    navigate(`/SuperAdmin/users/${input.value}`)
   
  };

  const reload = () => {
    
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/admin/${userStorage.id}`)
   .then((users) => setUsers(users.data));
   
  }, []);

  return ( 
<div>
      <Container>
        
        <div onSubmit={handleSubmit}>
        <form >
        <div className="searchBox">
          <input
            type="search"
            placeholder="Search User By DNI"
            className="searchInput"
            aria-label="Search"
            {...input}
          />
          <button className="searchButton" variant="outline-success">
            <ImSearch />
          </button>
        </div>
      </form>
      </div>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>E-mail</th>
              <th>DNI</th>
              <th>Address</th>
              <th>Admin</th>

            </tr>
          </thead>
          {users.map((user, index) => {
            return (
          <tbody key={index}>
            {
                <tr>
                  <td>{user.name}</td>
                  <td>{user.surname}</td>
                  <td>{user.email}</td>
                  <td>{user.dni}</td>
                  <td>{user.address}</td>
                  <td>{(user.isAdmin)? "Yes" : "No"}</td>
                  <td><button onClick={() => {handleRol(user.id, user.isAdmin)}}>{user.isAdmin ? 'Take Rol Admin' : 'Give Rol Admin'}</button></td>
                </tr>

            }

          </tbody>
            )})}
        </Table>

      </Container>

    </div>

  )
    
};


    
  

export default SuperAdmin;
