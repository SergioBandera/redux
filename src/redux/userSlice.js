
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
        nombre:null,
        correo:null,
        edad: null,
}


export const userSlice = createSlice({
    name: "userData",
    initialState,
    reducers:{
        addName: (state, payload) =>{

            state.nombre = payload; 
        }
    }
})
export const {addName } = userSlice.actions;