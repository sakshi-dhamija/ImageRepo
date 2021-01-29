import React from "react";
import Pic1 from "../../../img/portfolio-1.jpg"
import Pic2 from "../../../img/portfolio-2.jpg"
import Pic3 from "../../../img/portfolio-3.jpg"
import Pic4 from "../../../img/portfolio-4.jpg"

class Portfolio extends React.Component {
  render() {
    return (
      <div className="container-fluid bg-success portfolio  py-5">
        <div className="row py-5 text-center">
          <div className="pb-3 col-lg-12 d-flex flex-column justify-content-center align-items-center">
          <a id="mentor"><h2>OUR Mentor</h2></a>
            <h1 className="pt-3">Review</h1>
          </div>
        </div>
        <div className="row py-5 mx-lg-5 no-gutters  d-flex justify-content-center align-items-center">
            <div className="col-lg-6">
                <img src={Pic1} className="img-fluid" alt=""/>
            </div>
            <div className="col-lg-8">
                <div className="row">
                   <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                   ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                   ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                   dolore eu fugiat nulla pariatur. Excepteur sint 
                   occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                   </p>
                </div>
            </div>
        </div>

        </div>
    );
  }
}

export default Portfolio;
