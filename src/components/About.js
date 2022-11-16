import React from "react";

function About() {
  return (
    <div className="bg-light my-5">
      <div className="container text-center py-5">
        <h1 className="text-center font-weight-light">
          <span className="text-info">About</span> me
        </h1>
        <div className="lead">
        I can develop the frontend of website
        </div>
        <div className="row">
          <div className="col-12 col-md-6 px-5 pt-5">
            <h5>About</h5>
            <p className="text-justify">
            I am Final year student of bachelor Computer science and engineering in Jaypee University of engineering and technology Guna . In technical field I have couple of interest a like programing and web development.
           
            </p>
          </div>
          <div className="col-12 col-md-6 px-5 pt-5">
          <h5>Achievements</h5>
            <p>
          
              3-star Rating in Codechef.<br />
              Technical head GFG Chapter JUET.<br />
              250 + questions solve in Leetcode.<br />
              180+ questions solve in GFG.
            </p>
          </div>
          <div className="col-12 col-md-6 px-5 pt-5">
          <h5>Certificate</h5>
            <p >
              Infytq Python Certificartion (Infosys)<br />
             Programming for Everybody <br />
             HTML, CSS, and JavaScript for Web Developers<br />
             React - The Complete Guide (incl Hooks, React Router)
          </p>
          </div>
          <div className="col-12 col-md-6 px-5 pt-5">
           <h5>Experience</h5>
            <p>
              <b>Developkaro As WebDeveloper (Internship)</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
