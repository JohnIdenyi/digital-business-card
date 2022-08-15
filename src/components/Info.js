import React from "react";
import hero from "../images/hero.png"
import mailLogo from "../images/Mail.png"
import linkedinLogo from "../images/linkedin.png"

function Info() {
    return (
        <div className="info-container">
            <img src={hero} className="hero" />
            <div className="description">
                <h1>Laura Smith</h1>
                <p className="job-title">Frontend Developer</p>
                <p className="email">laurasmith.website</p>
                <div className="buttons">
                    <button className="email-btn btn">
                        <img src={mailLogo} />
                        <span className="btn-text">Email</span>
                    </button>
                    <button className="linkedin-btn btn">
                        <img src={linkedinLogo} />
                        <span className="btn-text">Linkedin</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Info;