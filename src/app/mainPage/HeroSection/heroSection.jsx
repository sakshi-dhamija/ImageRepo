import React from "react";
import Pic1 from "../../../img/hero-bg.jpg";

class HeroSec extends React.Component {
  render() {
    return (
      <div className="container-fluid HeroCont d-flex align-items-center ">
        <div className="container mt-5 d-flex flex-column justify-content-between align-items-start">
         <a id="home"> <h3 className="pb-3">Winter Project</h3></a>
          <h1 className="pb-1">Image Repository</h1>
          <p className="pb-2">
            Please enter a search query in search field or upload an image. 
            <br />
            Multiple queries should be comma seprated, example: cat, dog!
            <br /> 
          </p>
          <div className="home__in">
             <button className="mt-5">Search</button>
          <input className="home__input" ></input>
          
          </div>
          <div className="home__in">
          <button className="mt-5">Upload</button>
             <input className="home__input" type='file' accept=".jpg, .jpeg, .png, .bmp, .gif" />
          </div>
          
        </div>
      </div>
    );
  }
}
export default HeroSec;
