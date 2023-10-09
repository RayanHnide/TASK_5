import CoursesContent from "../components/CoursesContent"


import {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";

import {fetshCourses} from "../../../store/slice/courses/courses.slice.js";


const CoursesComponent =()=>{
    const data = useSelector((state)=>state.courses?.data)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetshCourses())
    })




    // const [data,setData] = useState([])
    // useEffect(()=>{
    //    axios.get("http://localhost:3000/corsesData").then((res)=>{
    //        setData(res.data)
    //    })
    // },)

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
                        <div className=" mx-0 w-75 row  justify-content-between ">
                            {
                                data.map((e,i)=>{
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

            </div>

        </>
    )
}

export default CoursesComponent