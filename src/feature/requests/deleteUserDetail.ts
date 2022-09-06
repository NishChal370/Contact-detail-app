import { AXIOS } from "../../api/Constant";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteUserDetail = createAsyncThunk(
      '/deleteUserDetail',
      async (id: number)=>{
            await AXIOS
                  .delete(id.toString());
            return id;
      }
)