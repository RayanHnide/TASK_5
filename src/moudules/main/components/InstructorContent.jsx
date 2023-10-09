
import instructorImg from '../../../assets/Home.jpg'
import poster from '../../../assets/children-celebrating-birthday.jpg'
import { Player } from 'video-react';
import AOS from 'aos'
const InstructorContent =({ title,subTitle,list,btn,showBtn=true,showImg=false,showChildren=false,backgroundColor='#dadada29'})=>{
   AOS.init()
    return(
        <>
       <div style={{backgroundColor:backgroundColor}}>
       <div className="container  mt-5 mb-5">
                
                <div className="row w-100 ">
                  <div data-aos="fade-right" className="col-md-5 d-flex justify-content-end align-items-center">
                   <div style={{color:'gray'}}>
                   <h2 className="text-primary">
                      {title}
                    </h2>
                    <p>
                      {subTitle}
                    </p>
                
                   <div style={{listStyle:'none'}} >
                     {
                        list
                     }
                         
                    </div>
                   {
                     showChildren? <> <div className='row mx-0 mt-5'>
                     <div className='col-4'>
                        <h4 className='text-primary'>204+</h4>
                        <h6 style={{color:'gray'}}>No. Student</h6>
                     </div>
                     <div className='col-4'>
                        <h4 className='text-primary'>0</h4>
                        <h6 style={{color:'gray'}}>No. Teachers</h6>
                     </div>
                     <div className='col-4'>
                        <h4 className='text-primary'> 0</h4>
                        <p style={{color:'gray'}}>No. Awards</p>
                     </div>
                    </div>
                    <button className='btn btn-primary'>ADMISSION</button>
                    <button className='btn btn-outline-primary mx-4'>LEAN MORE</button></>:''
                   }
                         {
                            showBtn?<button className="btn btn-primary  mt-lg-5 mb-5 mt-5  text-white">{btn}</button>:''
                         }
     
                 
                   </div>
                  </div>
                  <div className="col-md-6 pt-5 text-center text-lg-end" style={{marginTop:'-5rem'}}>
                     {
                        showImg ?<div className='mt-5'>
                           <Player
                        playsInline
                        poster={poster}
                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                      />
                        </div>: <img className='w-50' data-aos="fade-left"   src={instructorImg} alt="instructorImg" />
                     }
                  </div>
                </div>
     
             </div>
       </div>
        
        </>
    )
}

export default InstructorContent