
import React from "react";
import {useNavigate} from "react-router-dom";


export default function Header({title,subTitle,img,btnTitle,margin,titleFontSize,subTitleFontSize}){
    const navigate= useNavigate()
    return(
        <>
          
     
            <div style={{height:'100vh',marginTop:margin,backgroundImage:`url(${img})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}>

                <div className="d-flex justify-content-center align-items-center text-white" style={{backgroundColor:'rgba(32 ,150, 220,0.82)',height:'100vh',zIndex:"999",}} >
                    <div className="text-center">
                        <h6 className="p-3" style={{fontSize:titleFontSize}}> {title} </h6>
                        <div className="d-flex justify-content-center mt-5 ">
                            <h1 className="w-75 " style={{fontFamily:'unset',fontSize:subTitleFontSize}}>{subTitle}</h1>

                        </div>
                        <button onClick={()=>{
                        navigate('/courses')}
                        } className="btn btn-primary mt-5 text-white">{btnTitle}</button>

                    </div>
                </div>

            </div>
      
        
        </>
    )
}

