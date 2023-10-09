
import smiling from '../../../assets/smiling-girl-studying-home.jpg'
import smiling2 from '../../../assets/students-knowing-right-answer.jpg'
import {AiOutlinePlus} from 'react-icons/ai'
const ChoseUs=()=>{
    return(
        <>
         
        <div className="row mx-0 container d-flex justify-content-center pt-5 mt-5 mb-5">
              <div className="col-md-4 mt-5">
                    <img className='w-100' src={smiling} alt="" />
              </div>

              <div className="col-md-6 mt-5">
                   <h2 className='text-primary'>Why Choose Us</h2>
                   <h6 className='fw-light' style={{color:'gray'}}>
                    Far far away,behind the word mountains,far fromthe countres vokalia and Consonantia ,there live the blind texts. Separated they live.
                   </h6>
                   <div className='p-3 w-100 bg-primary text-white'>
                       <h4 className='fw-light'>
                         - Good Teachers and Staffs
                       </h4>
                   </div>
                   <div className='row mx-0 mt-5'>
                            <div className='col-md-4 d-flex justify-content-center'>
                                <img className='w-75' src={smiling2} alt="" />
                            </div>
                            <div className='col-md-7'>
                            <h6  className='mt-4 mt-lg-0'  style={{color:'gray'}}>
                                Far far away,behind the word mountains,far fromthe countres vokalia and Consonantia ,there live the blind texts. Separated they live.
                             </h6>
                             <h6  style={{color:'gray'}} className='mt-3'>behind the word mountains,far fromthe countres vokalia and Consonantia</h6>
                            </div>

                            <h6 className='mt-5'><AiOutlinePlus/> We Value Good Characters</h6>
                            <h6 className='mt-4'><AiOutlinePlus/> Your Children are Safe</h6>
                   </div>
              </div>
        </div>       
        </>
    )
}

export default ChoseUs