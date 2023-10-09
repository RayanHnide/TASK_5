
import React from "react";
import img from "../../../assets/Home.jpg"
import Header from "../components/Header";
import Category from "../components/Category";
import Instructor from "../components/Instructor";
import Education from "../components/Education";

import HomeAboutUS from "../components/HomeAboutUS";
import HomeNews from "../components/SchoolNews";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import ChoseUs from "../components/ChoseUs";

import CoursesHome from "../components/Courses";

export default function Main(){


    return(
        <>     
        <Header margin='-10rem' img={img} title='WHATCH THE VIDEO' btnTitle='EXPLORE COURSES' subTitle=' Education is the Mother of Leadership' />
        <Category/>
        <Instructor />
        <Education/>
       <CoursesHome/>
        <HomeAboutUS/>
        <HomeNews/>
        <Pricing/>
        <Testimonials/>
        <ChoseUs/>



        </>
    )
}

