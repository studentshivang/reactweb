import React from "react";
import Common from './Common';
// import team from './images/team.png';
import img10 from './images/img10.jpg';

const About=()=>{
    return(
        <>
           <Common
           name="Welcome to the About page"
        //    imgsrc={team}
           imgsrc={img10}
           visit="/contact"
           btname="Contact Now"
           />
        </>
    )
}

export default About;