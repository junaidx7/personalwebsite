import React, { useEffect, useState } from "react";
import config from "./Config";

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
                    <h2 className="bottom-xl footer-text" style={{ textAlign: 'left' }}>junaid79x@gmail.com</h2>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <button style={{ float: 'left' }} onClick={handleCopyEmail}>Copy email</button>
                        {copySuccess && <span className="copy-success">{copySuccess}</span>}
                    </div>
                </div>




                <div className="box2_footer">
                    <h2 className=" bottom-lg" ><a className="footer-text-link" href={config.linkedinLink}>Linkedin</a></h2>
                    <h2 className="bottom-lg"><a className="footer-text-link" href={config.resumeLink}>Resume</a></h2>
                    <h2 className="bottom-lg"><a className="footer-text-link" href={config.aboutme}>About Me</a></h2>
                    <h2 className="bottom-lg"><a className="footer-text-link" href={config.whatsapp}>Whatsapp</a></h2>
                </div>







            </section>
            <div className="line-border"></div>

            <div className="lowerbox">


                <p className="sm">2024</p>

                {/* <p className="sm">designed in dubai with peer pressure</p> */}
                <p className="sm">designed and coded by me in dubai.</p>
                <p className="sm">time @uae: 12.34pm</p>
            </div>

        </div>
    );
}

export default Footer;