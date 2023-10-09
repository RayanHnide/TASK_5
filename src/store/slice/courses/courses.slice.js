
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";




export const  fetshCourses=createAsyncThunk('courses/fetch',async ()=>{
    return await axios.get('http://localhost:3000/corsesData').then(res=>res.data)

})

const teachersReduser=createSlice({
    name:'courses',
    initialState:{
        data:[]
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetshCourses.fulfilled,(state,action)=>{
            state.data=action.payload
        })
    }
})

export default  teachersReduser.reducer
