import EducationContent from "./EducationContent"
import { EducationData } from "../../../const/EducationData"


const Education = ()=>{
    return(
        <>
        <div className="mb-5 mt-5">
             
         <h1 className="text-primary text-center ">
            We Have Best Education
         </h1>
         <p className="text-center" style={{color:'gray'}}>
             Far far away,behind the word mountains,far fromthe countres vokalia and <br /> Consonantia ,there live the blind texts.
         </p>
         <div className="row w-100 d-flex justify-content-center   mx-0">
         
        {
            EducationData.map((e,i)=>{
                return(
                    <>
                    <EducationContent title={e.title} subTitle={e.subTitle} icon={e.icon}/>
                    </>
                )
            })
        }
        </div>
        </div>
        </>
    )
}
export default Education