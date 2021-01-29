import React from "react"
import Pic1 from "../../../img/about-us.jpg"

class About extends React.Component
{
    render()
    {
        return(
            <div className="container-fluid py-4  AboutUs">
                <div className="m-lg-5 py-5">
                    <div className="row py-5">
                        <div className="col-lg-6 ">
                        <a id="about">   <img className="img-fluid" src={Pic1} alt="About"/></a> 
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            
                            <h1 className="pb-3">Features</h1>
                            <p className="pb-2">
                            <ul>
                                <li>feature1</li>
                                <li>feature2</li>
                                <li>feature3</li>
                                <li>feature4</li>
                                <li>feature5</li>
                            </ul>
                            </p>
                            
                            <button className="mt-4">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default About