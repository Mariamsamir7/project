import React from "react";

const Home =() =>{
    return(
        <div   >
            <br>
   
   
            </br>
            <h4  style={{color:'brown'}}>Welcome to our site(: </h4> 
           
           <p style={{fontSize:20}}> online shopping is gaining global poularity.<br>
   
   
   </br> 
                 we are living in a digital world
                 where communication <br>
   
   
   </br>has become very fast.any popular trend in the USA
   <br>
   
   
   </br>and Europe crosses borders within no time</p>
   <br>
   
   
   </br>
   <br>
   
   
   </br>
             <a href={"/products/"}style={{"marginLeft":150 ,"marginBottom":100 ,"fontSize":30} } className="btn btn-primary">
         GET STARTED
        </a>
        
           <img src="../images/home.jpg" width="1120" height="400"
            alt="..." /> 
      <br></br> <br></br> <br></br>
       
        </div>
    );
};
export default Home;
