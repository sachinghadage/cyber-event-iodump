import React, { Component } from "react";
import "./home.css"

import Navbar from "../components/Navbar";
import Homebody1 from "../components/homebody1"
import Homebody0 from "../components/homebody0"
import Homebody2 from "../components/homebody2"
import Homebody3 from "../components/homebody3"
import Homebody4 from "../components/homebody4"
import Homebody5 from "../components/homebody5"
import Homebody6 from "../components/homebody6"
import Homebody7 from "../components/homebody7"
import Homebody8 from "../components/homebody8"

export default class home extends Component {
  render() {
    return (
      
      <div>
       
        <Homebody0/>
        <Homebody1/>
        {/* <div className="fixed-img"></div> */}
        <Homebody2/>
        <Homebody3 />
        <Homebody4 />
        <Homebody5 />
        <Homebody6 />
        <Homebody7 />
        <Homebody8 />

      </div>
    );
  }
}
