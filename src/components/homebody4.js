import React, { Component } from "react";
import "../components/homebody4.css";

export default class homebody4 extends Component {
  render() {
    return (
      <div className="container-4 ">
        <h1>Conference activities</h1>
        <h3>
          I’m a text box. Double click me to edit the text or to change the way
          I look.
        </h3>
        <div className="in-block">
        <div className="container-cards">
        <div className="cards">
          <h5>Keynotes</h5>
          <p>The event features distinguished speakers who are experts in the field of Cyber Security. Attending this event will provide an opportunity to learn about the latest trends and best practices in Cyber Security.</p>
        </div>
        <div className="cards">
          <h5>Enhance Knowledge & skills</h5>
          <p>Whether you are a beginner or an experienced professional, this event will provide valuable insights on how to enhance your knowledge and skills in Cyber Security.</p>
        </div>
        </div>

        <div className="container-cards2">
        <div className="cards">
          <h5>Meet ups & Networking</h5>
          <p>This event provides an opportunity to network with professionals in the industry and other students interested in the field.</p>
        </div>
        <div className="cards">
          <h5>Career Opportunities</h5>
          <p>The event covers topics such as career opportunities in Cyber Security, which is valuable information for students looking to pursue a career in this field.</p>
        </div>
        </div>
        </div>
        
        
        
      </div>
    );
  }
}
