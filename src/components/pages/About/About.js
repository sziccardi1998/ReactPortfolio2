import React from "react";
import "./about.css";

const About = () => (
  <div class="container">
    <h1>Get to know me</h1>
    <img
      src={`${process.env.PUBLIC_URL}/assets/headshot-small2.jpg`}
      id="headshot"
      alt="Website owner headshot"
    />
    <br></br>
    <div class="row">
      <div col="4"></div>
      <div col="4" id="aboutme">
        <p>
          I am currently an engineer for a company that sells nutritional supplements. Outisde of ny work I enjoy listening to music and snowbaording. I graduated from The Ohio State University in 2020 with a B.S in Chemical Engineering. <a href="mailto:sziccardifullstack@gmail.com">Email me</a>
        </p>
      </div>
      <div col="4"></div>
    </div>
  </div>
);

export default About;