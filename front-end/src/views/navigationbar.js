import React, { useState,useEffect } from 'react'
import './navigationbar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const [isloggedin,setisloggedin] = useState(false)

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedGalleryappUser')
        if(loggedUserJSON) {
            setisloggedin(true)
        }
    },[])

    const logout = () => {
        localStorage.clear()
        window.location.href ='/'
    }

    return(
        <div className="navigation">
            <nav>
                <ul className="nav-type">
                    <li><Link to='/' >MyCollection</Link></li>
                    <li><Link to='/add' >Add</Link></li>
                    <li>{isloggedin? <a style={{cursor: 'pointer'}} onClick={logout} >Logout</a>:<Link to='/login' >Login</Link> }</li>
                    
                </ul>
            </nav>
        </div>
    )
}

export default NavBar