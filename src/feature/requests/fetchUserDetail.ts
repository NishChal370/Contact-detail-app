import { AXIOS } from "../../api/Constant"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchUsersDetail = createAsyncThunk(
      '/fetchUsersDetail',
      async (lang: string)=>{
            const { data } = await AXIOS
                  .get(`/?lang=${lang}`)
            return data
      }
)
