import React from 'react' 
import {Link, NavLink, Outlet} from 'react-router-dom'




function Nav() {
  let activeStyle = {
    textDecoration: "underline",
    color: "black",
    fontSize: "30px",

  }

  return (
    <>
    <nav>
      <h1>ComedyFilmShare</h1>
      <ul className="nav-links">

        <NavLink to ="/"
          style = {({isActive}) => (isActive ? activeStyle : undefined)}
        >Home</NavLink>
        <NavLink to ="/ourfavs"
          style = {({isActive}) => (isActive ? activeStyle : undefined)}
        >OurFavs</NavLink>
        <NavLink to ="/forum"
          style = {({isActive}) => (isActive ? activeStyle : undefined)}
        >Forum</NavLink>
      </ul>
    </nav>
    <Outlet/>
    </>
  )
}



export default Nav
