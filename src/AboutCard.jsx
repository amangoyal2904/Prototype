import React from 'react';
import {Link} from "react-router-dom";

function AboutCard(props)
{
  return(
      <div className="aboutcard">
<Link exact to={props.link}>
  <div className="card">
    <img src={props.imgsrc} alt="Picturehj" className="card_img"/>
    <div className="card__info">
<span className="card__category">{props.title}</span>
      <p className="card__para">{props.para}</p>
    </div>
  </div></Link></div>
);
}

export default AboutCard;