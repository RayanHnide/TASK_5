
import AOS from 'aos'
const CategoryCard =({icon,title,subTitle})=>{
    AOS.init();
    return(
        <>
        
        <div data-aos="flip-left" className="col-md-2 mx-0 mx-lg-5 mt-4 " style={{backgroundColor:'#8080802e',height:'8rem'}}>
          <div className="row">
              <div style={{fontSize:'1.9rem'}} className="col-4 d-flex justify-content-center align-items-center">
                 {icon}
              </div>
              <div className="col-8 p-2   mt-3">
                    <div >
                        <h6>{title}</h6>
                        <p style={{color:'gray'}}>{subTitle}</p>
                    </div>
              </div>
          </div>
        </div> 
        </>
    )
}

export default CategoryCard