
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";




export const  fetshTeachers=createAsyncThunk('teachers/fetch',async ()=>{
    return await axios.get('http://localhost:3000/teacherData').then(res=>res.data)


})

const teachersReduser=createSlice({
    name:'teachers',
    initialState:{
        data:[]
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetshTeachers.fulfilled,(state,action)=>{
            state.data=action.payload
        })
    }
})

export default  teachersReduser.reducer
