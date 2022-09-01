import { AXIOS } from "../../api/Constant"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchUsersDetail = createAsyncThunk(
      '/fetchUsersDetail',
      ()=>{
            return AXIOS
                  .get('')
                  .then( ({data})=> data )
      }
)
