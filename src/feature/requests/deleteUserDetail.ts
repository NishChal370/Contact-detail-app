import { AXIOS } from "../../api/Constant";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteUserDetail = createAsyncThunk(
      '/deleteUserDetail',
      (id: number)=>{
            return AXIOS
                  .delete(id.toString())
                  .then( ()=> id)
      }
)