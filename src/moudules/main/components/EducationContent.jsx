
import AOS from 'aos'
const EducationContent=({title,subTitle,icon})=>{
    AOS.init()
    return(
        <>
        
        <div className="col-md-3 mx-0 mx-lg-5 mt-4 card " data-aos="flip-right" >
          
              <div style={{fontSize:'1.9rem'}} className="  d-flex justify-content-center align-items-center pt-4">
                 {icon}
              </div>
              <div className="text-center  pt-4 mt-1">
                    <div >
                        <h6 className="text-primary">{title}</h6>
                        <p style={{color:'gray'}}>{subTitle}</p>
                    </div>
              </div>
        
        </div> 
        </>
    )
}

export default EducationContent