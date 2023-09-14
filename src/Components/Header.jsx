import React from 'react'
import Navbar from './Navbar';

function Header() {
    return (
        <div id='main'>
            <Navbar />
            <div className="name">
                <h1><span>Launch You App</span> With Confidence And Creativity </h1>
                <p className="detail">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, placeat!</p>
                <a href="www.teamexus.com" className='cv-btn'>Download</a>
            </div>
        </div>
    )
}

export default Header;