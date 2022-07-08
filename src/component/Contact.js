import React from 'react'
import '../component_css/Contact.css'
function Contact() {
    return (
        <div className="contain">

            <div className="wrapper">

                <div className="form">
                    <h4>GET IN TOUCH</h4>
                    <h2 className="form-headline">Send us a message</h2>
                    <form id="submit-form" action="">
                        <p>
                            <input id="name" className="form-input" type="text" placeholder="Your Name*" />
                            <small className="name-error"></small>
                        </p>
                        <p>
                            <input id="email" className="form-input" type="email" placeholder="Your Email*" />
                            <small className="name-error"></small>
                        </p>
                        <p className="full-width">
                            <input id="company-name" className="form-input" type="text" placeholder="Company Name*" required />
                            <small></small>
                        </p>
                        <p className="full-width">
                            <textarea minLength="20" id="message" cols="30" rows="7" placeholder="Your Message*" required></textarea>
                            <small></small>
                        </p>
                        <p className="full-width">
                            <input type="checkbox" id="checkbox" name="checkbox" /> Yes, I would like to receive communications by call / email about Company's services.
                        </p>
                        <p className="full-width">
                            <input type="submit" className="submit-btn" value="Submit" />
                        </p>
                    </form>
                </div>

                <div className="contacts contact-wrapper">

                    <ul>
                        <h1>HelpingNGO</h1>
                        <li>HelpingNGO aims to counter malnutrition and support right to education of children hailing from socio-economically challenging backgrounds.</li>
                        <span className="hightlight-contact-info">
                            <li className="email-info">shivanshverma87@gmail.com</li>
                            <li><i className="fa fa-phone" aria-hidden="true"></i> <span className="highlight-text">+91-7054359242</span></li>
                        </span>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Contact