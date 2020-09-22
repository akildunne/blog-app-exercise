import React from 'react'
import './Nav.css'
import { NavLink, Link } from 'react-router-dom'

const Nav = () => {

    return (
        <nav>
            <div className="nav">
                <NavLink className="logo" to="/api/blogs">BlogsApp</NavLink>
                <div className="links">
                    {/* <NavLink className="link" to="/api/blogs">Blogs</NavLink> */}
                    <NavLink className="link" to="/api/blogs/create">Add Blog</NavLink>
                </div>
            </div>
        </nav>
    )

}

export default Nav