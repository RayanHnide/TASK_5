import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import { SplideContent } from '../../../const/SplideContent';
const SplideComponent = ()=>{
    return(
        <>
        
        
            <Splide  options={ {
                arrows:false,
                width:8000
                
                }} aria-label="My Favorite Images" className='d-flex justify-content-center pb-5'>
                    {
                        SplideContent.map((e,i)=>{
                            return(
                                <>
                                <SplideSlide key={i}>
                                    <div>
                                          
                                           <div className='d-flex justify-content-center'> <img style={{width:'10%',borderRadius:'50%'}} src= {e.img} alt="" /></div>
                                             <h6 className='text-center text-primary mt-4'>{e.name}</h6>
                                             <h6 className='text-center mt-2 '>{e.jop}</h6>
                                  
                                          
                                    </div>
                                </SplideSlide>
                                </>
                            )
                        })
                    }
                    
            </Splide>
        </>
    )
}

export default SplideComponent