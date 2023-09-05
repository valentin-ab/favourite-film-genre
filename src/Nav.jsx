import React from 'react' 
import {Link, NavLink, Outlet} from 'react-router-dom'




function Nav() {
  let activeStyle = {
    textDecoration: "underline",
    color: "gold",
    fontSize: "30px",

  }

  return (
    <>
    <nav>
      <h1>Logo</h1>
      <ul className="nav-links">

        <NavLink to ="/"
          style = {({isActive}) => (isActive ? activeStyle : undefined)}
        >Home</NavLink>
        <NavLink to ="/about"
          style = {({isActive}) => (isActive ? activeStyle : undefined)}
        >About</NavLink>
        <NavLink to ="/shop"
          style = {({isActive}) => (isActive ? activeStyle : undefined)}
        >Shop</NavLink>
      </ul>
    </nav>
    <Outlet/>
    </>
  )
}



export default Nav
