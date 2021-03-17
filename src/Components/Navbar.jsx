
import React from 'react'
import logo from '../assets/logo.png'

function Navbar() {
    return (
        <div className ="navbar">
            <img src={logo} alt="logo" href="#"/>

            <div>
                <ul className="navegacion">
                    <li>Header</li>
                    <li>Features</li>
                    <li>Offer</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
