import React from 'react'
import { NavLink } from 'react-router-dom'

import './NavLinks.css'

const NavLinks = props => {
    return ( 
        <ul className="nav-links">
            <NavLink to="/" exact>All Users</NavLink>
            <NavLink to="/u1/places" exact>My Places</NavLink>
            <NavLink to="/places/new" exact>New Places</NavLink>
            <NavLink to="/auth" exact>Authenticate</NavLink>
        </ul>
    )
}

export default NavLinks