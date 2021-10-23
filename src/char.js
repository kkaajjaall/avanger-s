import React,{useState} from 'react'
import api from "./api"



const Char = () => {
    const[man,setman]= useState(api);
    return (

     <section className="main">
      <div className="container c">
         <h1 className="main-heading text-center"> Top  Cast  </h1>
        <div className="row mt-lg-3 pics" >
         { man.map((element)=>{
             const{img,Name,Roll}=element
             return(
                 <>
                <div className="col-lg-4  p-lg-1 col-10 offset-1 offset-lg-0 ml-lg-0  mt-lg-5 mb-lg-5 main-div">
                    <div className="char"> {img} </div>
                    <h4 className="sub-heading  "> {Name}</h4>
                    <h5 className="para "> {Roll}</h5>

                </div>

                 </>
             )
         })
   
         }
         </div>
     </div>

     </section>  
    )
}

export default Char;
