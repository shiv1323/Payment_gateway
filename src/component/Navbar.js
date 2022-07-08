import React from 'react'
import '../component_css/nav.css'
function Navbar() {

    return (
        <div className="navbar" id='home'>
            <div className="log">
                <img
                    src="https://www.thesparksfoundationsingapore.org/images/logo_small.png"
                    alt="logo"
                />
                <h2 className='logo_name'>HelpingNGO</h2>
            </div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="contact">Contact</a></li>
                <li><a href="about">About</a></li>
                <li><button className="donate button">Make a Donate</button></li>
            </ul>
        </div>
    )
}

export default Navbar