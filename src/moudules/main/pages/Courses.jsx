import Header from "../components/Header";

import img from "../../../assets/Home.jpg"
import CoursesComponent from "../coursesComponent/CoursesComponent.jsx";
import React, {useEffect, useState} from "react";
import CoursesHome from "../components/Courses";
import axios from "axios";



export default function Courses(){


    return(
        <>     
                   <Header titleFontSize='4rem' subTitleFontSize='20px' margin='-10rem' img={img} title='Courses' btnTitle='EXPLORE COURSES' subTitle=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga reiciendis perferendis nostrum numquam sapiente consequuntur consequatur vitae nam ratione deserunt sequuntur consequatur vitae nam ratione ." />

                         <CoursesComponent/>



               

         
        </>
    )
}

