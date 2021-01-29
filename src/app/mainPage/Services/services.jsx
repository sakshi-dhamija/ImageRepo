import React from "react"

class Services extends React.Component
{
    render()
    {
        return(
            <div className="container-fluid bg-success services  pb-5">
                <div className="row pb-5 text-center">
                    <div className=" col-lg-12 d-flex flex-column justify-content-center align-items-center">
                       <a id="team"><h1 className="pt-3">Meet Developers Behind The Idea</h1></a> 
                    </div>
                </div>
                <div className="row  d-flex justify-content-center align-items-center text-center">
                <div className="col-lg-3 bg-light d-flex flex-column justify-content-center mx-4 my-5 py-5">
                        <span className="p-4" ><i className="fas fa-tshirt"></i></span>
                        <img className="card__image" src="https://i2-prod.mirror.co.uk/incoming/article14334083.ece/ALTERNATES/s615/3_Beautiful-girl-with-a-gentle-smile.jpg" />
                        <h1 className="p-4">Ashok Arora</h1>
                        <p className="p-4">
                            Designation</p>        
                    </div>
                    <div className="col-lg-3 bg-light d-flex flex-column justify-content-center mx-4 my-5 py-5">
                        <span className="p-4" ><i class="fas fa-tshirt"></i></span>
                        <img className="card__image" src="https://i2-prod.mirror.co.uk/incoming/article14334083.ece/ALTERNATES/s615/3_Beautiful-girl-with-a-gentle-smile.jpg" />
                        <h1 className="p-4">Sakshi Dhamija</h1>
                        <p className="p-4">
                            designation</p>        
                    </div>
                    <div className="col-lg-3 bg-light d-flex flex-column justify-content-center mx-4 my-5 py-5">
                        <span className="p-4" ><i class="fas fa-tshirt"></i></span>
                        <img className="card__image" src="https://i2-prod.mirror.co.uk/incoming/article14334083.ece/ALTERNATES/s615/3_Beautiful-girl-with-a-gentle-smile.jpg" />
                        <h1 className="p-4">Raunak kumar</h1>
                        <p className="p-4">
                            designation</p>        
                    </div>
                </div>
            </div>
        )
    }
}
export default Services