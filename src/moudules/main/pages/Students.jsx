import Header from "../components/Header";
import img from "../../../assets/Home.jpg"
 import React, {useEffect} from "react";
import {StudentsCardComponent} from "../StudentsComponents/StudentsCardComponent";
import {useDispatch, useSelector} from "react-redux";
import {fetshTeachers} from "../../../store/slice/teachers/teachers.slice.js";
import {fetshStudents} from "../../../store/slice/students/students.slice.js";




export default function Students(){
    const data = useSelector((state)=>state.students?.data)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetshStudents())
    })

    return(
        <>
            <Header titleFontSize='4rem' subTitleFontSize='20px' margin='-10rem' img={img} title='Students' btnTitle='EXPLORE COURSES' subTitle=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga reiciendis perferendis nostrum numquam sapiente consequuntur consequatur vitae nam ratione deserunt sequuntur consequatur vitae nam ratione ." />
            <div className='row mx-0 justify-content-around mt-5'>
                {
                    data?.map((e,i)=>{
                        return(
                            <>
                                <StudentsCardComponent name={e.name} email={e.email} age={e.age} description={e.description}/>
                            </>
                        )
                    })
                }
            </div>





        </>
    )
}

