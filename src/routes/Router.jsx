
import {CoursesRouter} from '../moudules/main/routes/CoursesRoutes.jsx'
import { TeachersRouter} from '../moudules/main/routes/TeachersRoutes.jsx'
import App from "../App"
import Main from '../moudules/main/pages/Main';
import {StudentsRouter} from "../moudules/main/routes/StudentsRoutes.jsx";
export const routes = [


     {
        path:'/',
        element:<App/>,
        children:
        [
            {
            path:'',
            element:<Main />,
            },
            
           ...CoursesRouter,
            ...TeachersRouter,
            ...StudentsRouter

    
    
        ],

     },

];