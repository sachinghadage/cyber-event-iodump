import React, { Component } from "react";
import "./home.css"

import Hero from "../components/hero";
import TimeAndPlace from "../components/timeandplace"
import Speaker from "../components/Speaker"
import Parallax from "../components/parallax"
import Applications from "../components/applications"
import KeyPoints from "../components/keypoints"
import TimeLine from "../components/timeline"
import Sponsorships from "../components/sponsorships"
import Footer from "../components/footer"


export default class home extends Component {
  render() {
    return (
      
      <div>
       
        <Hero/>
        <TimeAndPlace/>
        <Speaker/>
        <Parallax />
        <Applications />
        <KeyPoints />
        <TimeLine />
        <Sponsorships />
        <Footer />

      </div>
    );
  }
}
