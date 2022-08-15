import React from "react";
import twitterLogo from "../images/Twitter-Icon.png";
import facebookLogo from "../images/Facebook-Icon.png";
import instagramLogo from "../images/Instagram-Icon.png";
import githubLogo from "../images/GitHub-Icon.png";

function Footer() {
    return (
        <footer>
            <img src={twitterLogo} />
            <img src={facebookLogo} />
            <img src={instagramLogo} />
            <img src={githubLogo} />
        </footer>
    );
}

export default Footer;