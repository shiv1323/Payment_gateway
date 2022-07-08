import React from 'react'
import '../component_css/Footer.css'
import Contact from './Contact';
function Footer() {
    const date = new Date()
    const fullYear = date.getFullYear();
    return (
        <>
            <div className="contact">
                <Contact />
            </div>

            <div className="footer">

                Copyright @ {fullYear} <span className="dark">Help Charity</span>  | All Rights Reserved
            </div>
        </>

    )
}

export default Footer