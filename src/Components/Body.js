import "../Styles/main.css";
import "../Styles/body.css";
import prizeicon from "../Assests/icons-prize.png";
import image1 from "../Assests/Office-management.png";
import ellipse from "../Assests/Ellipse.png"
import rectangle1 from "../Assests/Rectangle1.png"
import image2 from "../Assests/standing-people.png"
import sensor from "../Assests/sensor.png"
import tools from "../Assests/tools.png"
import innovative from "../Assests/innovative.png"
import wifi from "../Assests/wifi.png"
import customerRM from "../Assests/customerRM.png"
import button1 from "../Assests/button1.png"
import image3 from "../Assests/sitting-people.png"




function        body() {
    return ( 
        <div className="body">
                <div className="elpseContainer">
                    <img className="ellipse" alt="ellipse" src={ellipse}></img>
                </div>
                <div className="flexcontainer1">
                    <div className="container1">
                        <img className="icon1" src={prizeicon} alt="prizeicons" width={"40px"}></img>
                        <h4 className="slogan"> Improving Lives With Novel Sensor Technology </h4>
                    </div>

                    <div className="container2">
                        <h1 className="quote1">Detecting Tobacco and Marijuana Smoking In Hotels and Apartments</h1>
                    </div>

                    <div className="container3">      
                        <img className="icon1" src={prizeicon} alt="prizeicons" width={"40px"}></img>
                        <h4 id="perks">24x7 Monitoring</h4>
                    </div>          
                    <div className="container4">
                        <img className="icon1" src={prizeicon} alt="prizeicons" width={"40px"}></img>
                        <h4 id="perks">Immediate Detection</h4>
                    </div>
                    <div className="container5">
                        <img className="icon1" src={prizeicon} alt="prizeicons" width={"40px"}></img>
                        <h4 id="perks">Cleaner Rooms</h4>
                    </div>
                </div>  
                
                    <img className="image1" src={image1} alt="Image1"></img>
                
                    <div className="rectangle1class">
                        <img className="rectangle1" src={rectangle1} alt="rectangle1"></img>
                </div>                                                                                                                   
           
             
                
                <div className="req1class">
                <button className="req1">
                    Request a Quote</button>
                </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <div className="flexcontainer2">
            
            <div className="box1">
            <img className="image2"src={image2} alt="image2">
            </img>
                <div className="textbox1">    
                <h2 className="box1text1">FreshAir Sensor's Plug-In Smoking Detection Device</h2>
                <h4 className="box1text2">Protect your no-smoking areas and mintain cleaner rooms</h4> 
                </div>
            </div>  
        </div>  
        <br/>
        <div className="flexcontainer3"> 
        <div className="whatweofferDiv">
        <h2 className="whatweoffer"> WHAT WE OFFER?</h2> 
        </div>
        <img className="image3" src={image3} alt="image3">  
        </img>
        </div> 
       
        
       
        <div  className="containerGrid">

            <div className="gridsection1">
                <h2> Service and Perks</h2>
                <br/>
                <p style={{fontSize:"15px"}}> The only technology available for hotels andapartments to monitor for, immediately detect,and prove tobacco and marijuana smoking</p>
                <br/>
                <img className="customerRM" src={customerRM} alt="customerRMs"></img>
                <br/>
                <img className="button1" src={button1} alt="button1"></img>
            </div>

            <div className="gridsection2">
                <img style={{width:"55px"}} className="sensor" src={sensor} alt="sensor"></img>
                <br/>
                <h2> Proven Sensor Technology</h2>
                <br/>
                <p style={{fontSize:"15px"}}>Widely deployed in hotels, apartments, and other professionally managed properties, FreshAir's devices with patented PolySens® technology detect and prove smoking in unauthorized areas
</p>
            </div>

            <div className="gridsection3">
                <img style={{width:"50px"}} className="tools" src={tools} alt="tools"></img>
                <br/>
                <h2 style={{width:"300px"}}> Easy to Install and Tamper Proof</h2>
                <br/>
                <p style={{fontSize:"15px"}}>Designed to prevent typical efforts to defeat detection, FreshAir detection devices can be plugged into standard Type B outlets and secured with tamper-proof screws or hardwired into the ceiling or wall
</p>
            </div>

            <div className="gridsection4">
                <img style={{width:"50px"}} className="innovative" src={innovative} alt="innovative"></img>
                <br/>
                <h2>Innovative</h2>
                <br/>
                <p style={{fontSize:"15px"}}>Widely deployed in hotels, apartments, and other professionally managed properties, FreshAir's devices with patented PolySens® technology detect and prove smoking in unauthorized areas
</p>
            </div>

            <div className="gridsection5">
                <img style={{width:"50px"}} className="wifi" src={wifi} alt="wifi"></img>
                <br/>
                <h2> WI-FI Enabled</h2>
                <br/>
                <p style={{fontSize:"15px"}}>FreshAir detection devices connect to your building’s Wi-Fi to communicate 24x7 with the FreshAir monitoring platform </p>
            </div>
        </div>
            
                

                
        </div>
     );
}


export default body;