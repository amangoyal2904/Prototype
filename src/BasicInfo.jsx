import React from 'react';
import {Link} from "react-router-dom";
function BasicInfo(){
    return(
        <div className="basic">
        <a href="tel:9021928862">+91 9021928862 </a>
        <a href="mailto:info@andyinfosec.com">/ info@andyinfosec.com</a>
        <h1>LEARN CYBER SECURITY</h1>
        <p>Practical Hands on</p><p>Cyber Security Training with customized Schedule</p>
        <div className="basic-btn"> <Link  to="/trainingprograms">Training Programs</Link></div>
        </div>
    );
}
export default BasicInfo;