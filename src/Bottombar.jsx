import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {NavLink} from "react-router-dom";
function Bottombar(){
    return(
<div className="bottombar">
    <div className="social">
    <a href="https://twitter.com/AndyInfoSec_"><TwitterIcon className="twitter" /></a>
    <a href="https://www.instagram.com/andyinfosec/"><InstagramIcon className="instagram" /></a>
    <a href="https://www.linkedin.com/company/andyinfosec/"><LinkedInIcon className="linkedin"/></a>
    </div>
    <p>Copyright © 2020 Andy InfoSec - All Rights Reserved.</p>
    <ul className="footer">
    <li><NavLink to="/trainingprograms">TRAINING PROGRAMS</NavLink></li>
    <li><NavLink to="/contactus">CONTACT US</NavLink></li>
    <li><NavLink to="/career">CAREER</NavLink></li>
    <li><NavLink to="/events">EVENTS</NavLink></li>
    <li><NavLink to="/certifications">CERTIFICATIONS</NavLink></li>
    <li><NavLink to="/cybersec-for-small-biz">CYBERSEC FOR SMALL BIZ</NavLink></li>
    <li><NavLink to="/why-andy-infosec">WHY ANDY INFOSEC</NavLink></li>
    <li><NavLink to="/where-can-i-start">WHERE CAN I START</NavLink></li>
    <li><NavLink to="/customized-schedule">CUSTOMIZED SCHEDULE</NavLink></li>
    <li><NavLink to="/FAQ">FAQ</NavLink></li>
    
    </ul>
</div>
    );
}
export default Bottombar;