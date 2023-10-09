import Header from "../components/Header"
import img from "../../../assets/Home.jpg"
import Instructor from "../components/Instructor"
import OurTeam from "../TeachersComponent/OurTeam"



const Teachers=()=>{
    return(
        <>
             <Header titleFontSize='4rem' subTitleFontSize='20px' margin='-10rem' img={img} title=' Teachers' btnTitle='EXPLORE COURSES' subTitle=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga reiciendis perferendis nostrum numquam sapiente consequuntur consequatur vitae nam ratione deserunt sequuntur consequatur vitae nam ratione ." />
             <Instructor/>
             <OurTeam/>

        </>
    )
}

export default Teachers