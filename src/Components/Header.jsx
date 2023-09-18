import React from 'react'
import Navbar from './Navbar';

function Header() {
    return (
        <div id='main'>
            <Navbar />
            <div className="name">
                <h1><span> Mobentory </span> is a inventory management solution </h1>
                <p className="detail"> It is developed jointly by Teamexus Solutions Ltd. and Innovative Solutions Ltd.</p>
                <a href="www.teamexus.com" className='cv-btn'>Download</a>
            </div>
        </div>
    )
}

export default Header;