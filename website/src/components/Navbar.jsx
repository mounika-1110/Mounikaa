import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () =>{
    return(
        <nav>
            <ul className="navbar">
                <li className='element'>
                    <Link to="/home">Home</Link></li>
                <li className='element'>
                     <Link to="/about">About</Link></li>
                <li className='element'>
                     <Link to="/service">Service</Link></li>
                <li className='element'>
                     <Link to="/contact">Contactus</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar