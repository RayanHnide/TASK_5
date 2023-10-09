import { OurTeamContent } from "./OurTeamContent"
import { OurTeamData } from "../../../const/OurTeamData"
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetshTeachers} from "../../../store/slice/teachers/teachers.slice.js";
export const OurTeam=()=>{
    const data = useSelector((state)=>state.teachers?.data)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetshTeachers())
    })
    return(
        <>
        <div className="mt-5">
            <h1 className="text-primary text-center ">
                Meet Out Teachers
            </h1>
                
            <p className="text-center" style={{color:'gray'}}>
                Far far away,behind the word mountains,far fromthe countres vokalia and <br /> Consonantia ,there live the blind texts.
            </p>
            <div className=" row  mx-0  d-flex justify-content-center    ">
            {
                data.map((e,i)=>{
                    return(
                        <>
                        <OurTeamContent key={i} img={e.img} name={e.name} description={e.description} jop={e.jop}/>
                        </>
                    )
                })
            }
            </div>
           
        </div>
        
        
        </>
    )
}
export default OurTeam