import React from 'react';
import Navbar from '../Navbar';
import TrainingCard from '../TrainingCard';
import Trainingdata from '../Trainingdata';
import Bottombar from '../Bottombar';
const Trainingdisplay = Trainingdata.map((val, indexval) => {
    return (
      <TrainingCard
        title={val.title}
        imgsrc={val.imgsrc}
        fees={val.fees}
        duration={val.duration}
        additional={val.additional}
        link={val.link}
      />
    );
  });
  function TrainingProgram(){
      return(
        <>
        <Navbar />
        <h2 className="training_programs">Training Programs</h2>
            <div className="trainees">
            {Trainingdisplay}</div>
            <Bottombar />
        </>
      );

  }
  export default TrainingProgram;