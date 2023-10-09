import CategoryCard from "./CategoryCard"
import { CategoryData } from "../../../const/CategoryData"
import {useEffect} from "react";
import axios from "axios";

const Category = ()=>{
    useEffect(()=>{
        axios.get('http://localhost:3000/posts').then((res)=>{
            console.log(res.data)
        })
    },[])
    return(
        <>
        <div className="mt-5  container ">
            <h4 className="text-center text-primary">
                Browse Top Category
            </h4>
           <div className="row w-100 d-flex jsutify-content-center  mx-0">
           {
                CategoryData.map((e,i)=>{
                    return(
                        <>
                        <CategoryCard title={e.title} icon={e.icon} subTitle={e.subTitle} key={i} />
                        </>
                    )
                })
            }
           </div>
           <p className="text-center mt-5">
            we have more Category here. <a href="" style={{textDecoration:'none'}}>Browse All</a>
           </p>
        </div>
        </>
    )
}

export default Category