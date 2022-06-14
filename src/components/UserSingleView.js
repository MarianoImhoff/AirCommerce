import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { ImSearch } from 'react-icons/im';
import useInput from '../hooks/useInput';
import { Button, Container, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router';
import { useParams } from 'react-router'

const UserSingleView = () => {
    const userStorage = JSON.parse(localStorage.getItem('user'));
    const {dni}=useParams()
    const [searchUser, setSearchUser] = useState({});
    const input = useInput();
    const navigate = useNavigate()
   

    const handleSubmit = async (e) => {
        navigate(`/SuperAdmin/users/${input.value}`)
       
      };

      const handleRol = async () => {
        try {
          (searchUser.isAdmin)
            ? await axios.put(
                `http://localhost:8080/api/admin/takeRol/${userStorage.id}/${searchUser.id}`
              )
            : await axios.put(
                `http://localhost:8080/api/admin/giveRol/${userStorage.id}/${searchUser.id}`
              )
              const user = await axios.get(`http://localhost:8080/api/admin/users/${userStorage.id}/${searchUser.dni}`)
              setSearchUser(user.data)
              
        } catch (error) {
          console.log(error);
        }
       
    }


    useEffect(async () => {
           try {
    
      const user = await axios.get(
        `http://localhost:8080/api/admin/users/${userStorage.id}/${dni}`
      );
      
      setSearchUser(user.data);
    } catch (error) {
      console.log(error);
    }
       
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
          
            
          <tbody key={"searchUser"}>
            {
                <tr>
                  <td>{searchUser.name}</td>
                  <td>{searchUser.surname}</td>
                  <td>{searchUser.email}</td>
                  <td>{searchUser.dni}</td>
                  <td>{searchUser.address}</td>
                  <td>{(searchUser.isAdmin)? "Yes" : "No"}</td>
                  <td><button onClick={() => {handleRol(searchUser.id, searchUser.isAdmin)}}>{searchUser.isAdmin ? 'Take Rol Admin' : 'Give Rol Admin'}</button></td>
                </tr>

            }

          </tbody>
            
        </Table>

      </Container>

    </div>
  )
}

export default UserSingleView