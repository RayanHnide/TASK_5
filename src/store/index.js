

import {applyMiddleware, configureStore} from "@reduxjs/toolkit";
import reduxThunk from 'redux-thunk'


import coursesSlice from "./slice/courses/courses.slice.js";
import teachersSlice from "./slice/teachers/teachers.slice.js";
import studentsSlice from "./slice/students/students.slice.js";

const reducers={
    reducer:{
        courses:coursesSlice,
        teachers:teachersSlice,
        students: studentsSlice,
    }
}
export const store= configureStore(reducers,applyMiddleware(reduxThunk))