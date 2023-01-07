// import {useRef}from "react";
import "../Styles/main.css";
import "../Styles/body.css";
import mainLogo from "../Logo.png";


function Navbar (){
    // const navRef = useRef();
    // const showNavbar = () => {
    //     navRef.current.classlist.toggle("responsive_nav");
    // }

    return(
        <div className="headerContainer">
            <header>
                <img className="mainLogo" src={mainLogo} alt="mainLogo"></img>
           
            <nav>
                <a href="/#">Home</a>
                <a href="/#">Science</a>
                <a href="/#">Solutions</a>
                <a href="/#">FAQ</a>
                <a href="/#">Media</a>
            </nav>

            <button className="Login-btn1">
                Login
            </button>
                {/* <button className="nav-btn-close"  onClick={showNavbar}>
                    close
                </button>  */}
            
            {/* <button className="nav-btn-open" onClick={showNavbar}>
                open
            </button> */}
            </header>                                                                                                                      

            
        </div>
    );
}


export default Navbar