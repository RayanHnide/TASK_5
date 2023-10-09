import SchoolNewsContent from "./SchoolNewsContent"

import { SchoolNewsContentData } from "../../../const/SchoolNewsContentData"
const SchoolNews=()=>{
    return(
        <>
           <div className="mt-5" style={{backgroundColor:'#dadada29'}}>
          
            <div className="container d-flex justify-content-center  flex-lg-nowrap flex-wrap mb-5 ">
               {
                    SchoolNewsContentData.map((e,i)=>{
                        return(
                            <>
                             <SchoolNewsContent description={e.description} title={e.title} subtitle={e.subTitle} img={e.img} key={i}/>
                            </>
                        )
                    })
               }
            </div>        
           </div>
        
        </>
    )
}
export default SchoolNews