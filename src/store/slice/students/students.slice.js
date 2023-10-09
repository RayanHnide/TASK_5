
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";




export const  fetshStudents=createAsyncThunk('students/fetch',async ()=>{
    return await axios.get('http://localhost:3000/studntsInfo').then(res=>res.data)


})

const StudentsReduser=createSlice({
    name:'students',
    initialState:{
        data:[]
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetshStudents.fulfilled,(state,action)=>{
            state.data=action.payload
        })
    }
})

export default  StudentsReduser.reducer
