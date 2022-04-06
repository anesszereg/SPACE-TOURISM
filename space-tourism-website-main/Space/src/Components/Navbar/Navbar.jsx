import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'


function Navbar() {


    


    return (
        <div className='navbar'>
            <div className="navbar-right">
                <Link to="/" className='navbar-route'>
                    <b id='nav-number'>00 </b>
                     Home</Link>
                <Link to="/crew">
                    <b id='nav-number'>01 </b>
                     Crew</Link>
                <Link to="/destination">
                    <b id='nav-number'>02 </b>
                     Destination</Link>
                <Link to="/technology">
                    <b id='nav-number'>03 </b>
                     Technology</Link>


            </div>
            <div className="navbar-left"></div>
            <div className="nav-icon">
                {/* <img src="../../assets/shared/logo.svg" alt="" id='icon'/> */}
            </div>

        </div>
    )
}

export default Navbar
