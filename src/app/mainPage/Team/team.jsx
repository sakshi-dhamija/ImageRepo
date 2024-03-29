import React from "react"
import Pic1 from "../../../img/member-1.jpg"
import Pic2 from "../../../img/member-2.jpg"
import Pic3 from "../../../img/member-3.jpg"
class Team extends React.Component{
    render()
    {
        return(
            <div className="container-fluid bg-success team  py-5">
            <div className="row pb-5 text-center">
                <div className=" col-lg-12 d-flex flex-column justify-content-center align-items-center">
                    <h1 className="pt-3">Developers Behind The Idea.....</h1>
                </div>
            </div>
            <div className="row pb-5 no-gutters  d-flex justify-content-center align-items-center text-center">
            <div className="col-lg-3 bg-light d-flex flex-column justify-content-center mx-4 my-5">
                
                <img src={Pic1} className="img-fluid" alt=""/>
                <h1>Sakshi Dhamija</h1>
                </div>
                <div className="col-lg-3 bg-light d-flex flex-column justify-content-center mx-4 my-5">
                    <img src={Pic2} className="img-fluid" alt=""/>
                    <h1>Akash Arora</h1>
                </div>
                <div className="col-lg-3 bg-light d-flex flex-column justify-content-center mx-4 my-5">
                    <img src={Pic3} className="img-fluid" alt=""/>
                    <h1>Raunak Kumar</h1>
                </div>
            </div>
        </div>
        )
    }
}
export default Team