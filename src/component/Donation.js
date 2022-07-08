import React, { useState } from 'react'
import '../component_css/donation.css'
import Footer from './Footer';




function Donation() {
    const [Input, setInput] = useState();
    const paymentPage = "https://rzp.io/l/cOnzxdb";
    return (
        <><div className="contain_er">
            <div className="donate">
                <div className="donate-black">
                    <h3><span>₹</span> Donate</h3>
                    <p>Your contribution is vital to the success of our initiative.<br />Choose the amount you wish to donate with paypal, as one-time or monthly payment. </p>
                </div>
                <div className="denomination-other">
                    <input autoComplete="off" type="text" name="amount" placeholder="Enter Other Amount"
                        value={Input}
                        onChange={(e) => setInput(e.target.value)}

                        maxLength={7}
                        pattern="[0-9]*"
                        required
                    />
                </div>
                <div className="donate-submit">
                    <a href={paymentPage}><button type="submit" autoComplete="off">Donate</button></a>
                    <p ><small>*Please note that contributions are not tax-deductible.</small></p>
                </div>
            </div>
        </div>
            <Footer />
        </>

    )
}

export default Donation