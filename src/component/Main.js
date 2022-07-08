import React from 'react'
import '../component_css/main.css'
import Card from './Card'
import Donation from './Donation'
import Landingpage from './Landingpage'
import Navbar from './Navbar'
function Main() {
    return (
        <>
            {/* <div className="main"> */}
            <div className="baf">
                <div className="container__">
                    <Navbar />
                    <Landingpage />
                    <Card />
                    <Donation />

                </div>

            </div>
            {/* </div> */}

        </>




    )
}

export default Main