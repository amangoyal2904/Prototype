import React from 'react';
import Navbar from '../Navbar';
import BasicInfo from '../BasicInfo';
import Aboutdata from '../Aboutdata';
import AboutCard from '../AboutCard';
import TrainingCard from '../TrainingCard';
import Trainingdata from '../Trainingdata';
import Contact from '../Contact';
import Bottombar from '../Bottombar';
const Aboutdisplay = Aboutdata.map((val, indexval) => {
    return (
      <AboutCard
        link={val.link}
        imgsrc={val.imgsrc}
        title={val.title}
        para={val.para}
      />
    );
  });
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
function Home(){
    return(
        <>
        <div className="header">
            <Navbar />
            <BasicInfo />
            </div>
            <h2 className="aboutus">ABOUT US</h2>
            <div className="about">{Aboutdisplay}</div>
            <h2 className="training_programs">Training Programs</h2>
            <div className="trainees">
            {Trainingdisplay}</div>
            <h2 className="contact_us">CONTACT US</h2>
            <Contact />
            <Bottombar />
        </>
    );
}
export default Home;