import React from 'react'
import './navigationbar.js'

const NavBar = () => {

    return(
        <div className="navigation">
            <nav>
                <ul className="nav-type">
                    <li><a target="_blank" className="active">MyCollection</a></li>
                    <li><a href='https://codepen.io/TomikaBoy/full/LqMpaE' className='active1'>Add</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar