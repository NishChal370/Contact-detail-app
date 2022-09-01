import { AXIOS } from "../../api/Constant"
import { createAsyncThunk } from "@reduxjs/toolkit"

type InputValue = {
      id: number,
      email: string,
      phone: string,
      website: string,
}


export const putUserDetail = createAsyncThunk(
      '/putUserDetail',
      (inputValue: InputValue)=>{
            return AXIOS
                  .put(`${inputValue.id}`, inputValue)
                  .then( ({data})=> data )
      }
)
