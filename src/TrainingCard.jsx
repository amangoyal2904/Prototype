import React from 'react';

function TrainingCard(props)
{
  return(
  <div className="trainingcard">
    <p className="card_category">{props.title}</p>
    <img src={props.imgsrc} alt="Picturehj" className="card_img"/>
    <p className="fees">Fees:{props.fees}</p>
    <p className="duration">({props.duration})</p>
    <p className="additional">{props.additional}</p>
     <a className="findmore" href={props.link} target="_blank" >
     Find Out More
      </a>
    </div>
);
}

export default TrainingCard;