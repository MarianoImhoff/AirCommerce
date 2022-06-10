import React from 'react'
import s from "../styles/Home.module.css"

const Home = () => {
  return (
    <div className={s.Home}>
    <h1 style={{ textAlign: "center" }}>Welcome to AirCommerce</h1>
    <img src="https://i.gifer.com/L0cq.gif" alt="this slowpoke moves" style={{justifyContent: 'center'}} width="40%" height="40%"/>
   </div>
  )
    
}

export default Home
