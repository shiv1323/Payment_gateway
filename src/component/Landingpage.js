import React from 'react'
import '../component_css/landingpage.css'

function Landingpage() {
    return (
        <section className="landing-page" id='about'>
            <div className="container">
                <div className="content">
                    <div className="text">
                        <div className="middle">
                            <h1>Get started Today</h1>
                            <h2 className="big-title">
                                Help the <strong>Children</strong> when they need
                            </h2>
                            <p className="description">
                                With so much to consume and such little time, coming up
                                with relevant title ideas is essential
                            </p>
                            {/* <div class="text">   */}
                            <h3 style={{ color: "white" }}>CHILDREN NEED YOUR HELP</h3>
                            <p style={{ color: "white" }}>“I choose to rise up out of that storm and see that in moments of desperation,
                                fear and helplessness, each of us can be a rainbow of hope, doing what we can to
                                extend ourselves in kindness and grace to one another. And I know for sure that
                                there is no them – there’s only us.”</p>
                            <p style={{ color: "white" }}>– Oprah Winfrey, talk show host, actress and founder of Oprah’s Angel Network</p>
                            {/* </div> */}
                            <a href='about'><button className="btn" >Learn More</button></a>
                        </div>
                    </div>
                    <div className="image">
                        {/* <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhcml0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" /> */}
                    </div>
                </div>
            </div>
            {/* <Card />/// */}
        </section>
    )
}

export default Landingpage