import InstructorContent from "./InstructorContent"
import { InstructorData } from '../../../const/InstructorData';


 
const Instructor =()=>{
    const list =InstructorData.map((e)=>{
        return(
            <>
            {
                e.list.map((l,i)=>{
                    return(
                        <>
                        <li >
                           <span  key={i}>{l.icone}</span> <span>{l.title}</span>
                         </li>
                        </>
                    )
                })
            }
            </>
        )
    })
    return(
        <>
          
         {
            InstructorData.map((e)=>{
                return(
                    <>
                     <InstructorContent instructorImg={e.img} btn='GET STARTED' title={e.title} subTitle={e.subTitle} list={list}/>
                    </>
                )
            })
         }
        
        </>
    )
}

export default Instructor