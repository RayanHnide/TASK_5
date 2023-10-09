import PricingContent from "./PricingContent"
import { PricingContentData } from "../../../const/PricingContentData"

  const Pricing =()=>{
    return(
        <>
        
         <div className="mt-5 mb-5 pb-5">
         <h1 className="text-primary text-center pt-5 ">
                Pricing  
            </h1>
            
            <p className="text-center " style={{color:'gray'}}>
                Far far away,behind the word mountains,far fromthe countres  brvokalia and <br /> Consonantia ,there live the blind texts.
            </p>
            <div className="container d-flex justify-content-center  flex-lg-nowrap flex-wrap">
            {
                PricingContentData.map((e,i)=>{
                    return(
                        <>
                        <PricingContent btnOutLine={e.btnOutline} title={e.title} month={e.month} description={e.description} price={e.price} key={i}/>
                        </>
                    )
                })
            }
            </div>
         </div>
        </>
    )
  }

  export default Pricing