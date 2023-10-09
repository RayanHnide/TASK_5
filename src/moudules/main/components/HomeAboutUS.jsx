import { HomeAboutUSData } from "../../../const/HomeAboutUsData"
import { InstructorData } from "../../../const/InstructorData"
import InstructorContent from "./InstructorContent"
import     "../../../../node_modules/video-react/dist/video-react.css";


const HomeAboutUS=()=>{
    const list =HomeAboutUSData.map((e)=>{
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
        <div className="mt-5">
        {
            HomeAboutUSData.map((e)=>{
                return(
                    <>
                     <InstructorContent backgroundColor="white" showChildren={true} showImg={true} showBtn={false} title={e.title} subTitle={e.subTitle} list={list}/>
                    </>
                )
            })
         }
        </div>
        
        </>
    )
}

export default HomeAboutUS