import { Description } from "@mui/icons-material"



const PricingContent=({title,price,month,description ,btnOutLine})=>{
    return(
        <>
        
      
             <div className="card shadow mx-4 mt-4  p-5 text-center" style={{height:'50vh'}}>
                <h2 className="text-primary">{title}</h2>
               <h6> <span  className="h3 text-primary">{price}</span> <span style={{color:'gray'}}> /{month}</span></h6>
                <p>
                    {description}
                </p>
                <div className="d-flex justify-content-center">
                   <button className={`${btnOutLine}  p-3 mt-5`}>
                    GET STARTED
                </button>
                   </div>
             </div>
             
       
        
        </>
    )
}

export default PricingContent