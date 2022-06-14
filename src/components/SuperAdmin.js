import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { ImSearch } from 'react-icons/im';
import useInput from '../hooks/useInput';

const SuperAdmin = () => {
  const userStorage = JSON.parse(localStorage.getItem('user'));
  const [users, setUsers] = useState([]);
  const [searchUser, setSearchUser] = useState({});
  const input = useInput();

  const handleRol = async (userId, userAdmin) => {
    try {
      userAdmin
        ? await axios.put(
            `http://localhost:8080/api/admin/takeRol/${userStorage.id}/${userId}`
          )
        : await axios.put(
            `http://localhost:8080/api/admin/giveRol/${userStorage.id}/${userId}`
          );
      /* const users = await axios.get(`http://localhost:8080/api/admin/${userStorage.id}`)
        setSearchUser(users.data) */
      reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const user = await axios.get(
        `http://localhost:8080/api/admin/users/${userStorage.id}/${input.value}`
      );
      setUsers(user.data);
    } catch (error) {
      console.log(error);
    }
  };

  const reload = () => {
    axios
      .get(`http://localhost:8080/api/admin/${userStorage.id}`)
      .then((users) => setUsers(users.data));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/admin/${userStorage.id}`)
      .then((users) => setUsers(users.data));
  }, []);

  return (
    <div>
      <form className="searchContainer" onSubmit={handleSubmit}>
        <div class="searchBox">
          <input
            type="search"
            placeholder="Search"
            className="searchInput"
            aria-label="Search"
            {...input}
          />
          <button className="searchButton" variant="outline-success">
            <ImSearch />
          </button>
        </div>
      </form>

      {users.map((user, index) => {
        return (
          <ul key={index}>
            <li>Name: {user.name}</li>
            <li>Surname: {user.surname}</li>
            <li>Email: {user.email}</li>
            <li>Address: {user.address}</li>
            <li>DNI: {user.dni}</li>
            <li>isAdmin: {user.isAdmin ? 'Yes' : 'No'}</li>
            <button
              onClick={() => {
                handleRol(user.id, user.isAdmin);
              }}
            >
              {user.isAdmin ? 'Take Rol Admin' : 'Give Rol Admin'}
            </button>
          </ul>
        );
      })}
    </div>
  );
};

export default SuperAdmin;
