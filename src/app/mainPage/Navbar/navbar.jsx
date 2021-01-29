import React from "react"
import { auth, provider } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "./userSlice";
function Navbar()
{   
    
        const dispatch = useDispatch();
        const click = ()=>{
            console.log("working");
            auth
      .signInWithPopup(provider)
      .then(({ user }) =>
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        )
      )
      .catch((error) => alert(error.message));
        }
        return(
            <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"#191919"}}>
                <a className="navbar-brand ml-lg-5" href="#">ImageRepo<span>.</span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mr-5">
                        <li className="nav-item mr-5">
                            <a className="nav-link active" href="#home">Home</a>
                        </li>
                        <li className="nav-item mr-5">
                            <a className="nav-link" href="#about">Features</a>
                        </li>
                        <li className="nav-item mr-5">
                            <a className="nav-link" href="#team">Team</a>
                        </li>
                        <li className="nav-item mr-5">
                            <a className="nav-link" href="#mentor">Mentor</a>
                        </li>
                        <li className="nav-item mr-5" onClick={click}>
                            <a className="nav-link" href="#">Login</a>
                        </li>


                    </ul>
                </div>
            </nav>
        )
    
}
export default Navbar