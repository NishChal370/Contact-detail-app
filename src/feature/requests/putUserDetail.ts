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
      async (inputValue: InputValue)=>{
            const { data } = await AXIOS
                              .put(`${inputValue.id}`, inputValue)
            return data
      }
)
