import React,{useState} from 'react';
import image from './images/andy_logo.png';
import {NavLink} from "react-router-dom";
import ListIcon from '@material-ui/icons/List';
function Navbar(){
    const [cake,show]=useState(true);
     function flip(){
         show(!cake);
         console.log(cake);
     }
    return(
        <nav>
            <div className="logo">
                <img src={image} alt="Andy"  />
            </div>
            <div className="listicon" onClick={flip}><ListIcon  /></div>
            <ul id={cake? "hide" : " "}>
                <li><NavLink exact activeClassName="active_class" to="/">Home</NavLink></li>
                <li><NavLink exact activeClassName="active_class" to="/news">News</NavLink></li>
                <li><NavLink exact activeClassName="active_class" to="/trainingprograms">Training Programs</NavLink></li>
                <li><NavLink exact activeClassName="active_class" to="/research">Research</NavLink></li>
                <li><NavLink exact activeClassName="active_class" to="/contactus">Contact Us</NavLink></li>
            </ul>
        </nav>
    );
}
export default Navbar;