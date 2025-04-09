import React, { useEffect, useState } from "react";
import config from "../../../Config";
import { Link } from "react-router-dom";

const Footer = () => {
    const [copySuccess, setCopySuccess] = useState('');

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('junaid79x@gmail.com')
            .then(() => {
                setCopySuccess('Email copied!');
                setTimeout(() => setCopySuccess(''), 2000); // Clear message after 2 seconds
            })
            .catch(err => {
                console.error('Failed to copy email:', err);
                setCopySuccess('Failed to copy email');
            });
    };

    return (
        <div>
            <section className="footer-section">

                <div className="box3_footer" style={{ textAlign: 'left' }}>

                    <div className="text-cover">


                        <h1 className="footer-text">junaid79x@gmail.com</h1>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>

                        <button className="copyemailbutton" onClick={handleCopyEmail}>copy email</button>





                    </div>

                    {copySuccess && <span className="copy-success">{copySuccess}</span>}


                </div>










            </section>


            <div className="line-border"></div>

            <div className="lowerbox">

                <h5>Junaid Mohamed</h5>


                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>

                    <Link to='/'>    <h5>Home</h5>  </Link>



                    <h5>About</h5>

                    {/* <h5>Work</h5>

                <h5>Contact</h5> */}


                </div>



            </div>

        </div>
    );
}

export default Footer;