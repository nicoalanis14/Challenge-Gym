import React from 'react'
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className="header">
            <div className="background-header">
                <Navbar/>
                <div className="mainheader">
                    <h2>Step up your</h2>
                    <h1><span>Fitness</span> with us</h1>
                    <p>Build your body and Fitness with professional touch</p>
                    <button className="btn">Join us</button>
                </div>
            </div>
        </div>
    )
}

export default Header
