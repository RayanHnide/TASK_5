import CoursesContent from "./CoursesContent"
import img from "../../../assets/front-view-young-teacher-helping-her-students-class.jpg"

import { CorsesData } from "../../../const/CoursesData"
import Header from "./Header"
import { useState } from "react"
const CoursesHome =( )=>{

  const [subTitle] = useState("Far far away,behind the word mountains,far fromthe countres vokalia and Consonantia ,there live the blind texts.'")
    return(
        <>
          <div className="mt-5 mb-5" style={{backgroundColor:'#dadada29'}}>
            <div className="pt-5">
            <h1 className="text-primary text-center ">
                The Right Course For You
            </h1>
            
            <p className="text-center" style={{color:'gray'}}>
                Far far away,behind the word mountains,far fromthe countres vokalia and <br /> Consonantia ,there live the blind texts.
            </p>
            <div className="d-flex  justify-content-center">
          <div className=" mx-0 w-75 d-flex flex-lg-nowrap flex-wrap justify-content-around ">
           {
            CorsesData.map((e,i)=>{
              return(
                <>
                    <CoursesContent icon={e.icon} img={e.img} number={e.number} lessonName={e.lessonName} star={e.star} price={e.price} subTitle={e.subTitle} title={e.title} numberOfStar={e.numberOfStar}/>
                </>
              )
            })
           }
           </div>
           </div>
            </div>

                  <Header subTitleFontSize='100%' titleFontSize='2rem' margin='5rem' img={img} title="Education for Tomorrow's Leaders " btnTitle='ENROLL NOW' subTitle={subTitle} />


          </div>
        
        </>
    )
}

export default CoursesHome