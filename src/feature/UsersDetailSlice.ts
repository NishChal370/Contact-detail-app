import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AXIOS, URL_USERS_Detail } from "../api/Constant";


type User = {
      id: number,
      name: string,
      email: string,
      phone: string,
      website: string,  
}

type InitialState ={
      loading: boolean,
      error: string,
      usersDetail: User[]
}


export const fetchUsersDetail = createAsyncThunk(
      '/fetchUsersDetail',
      ()=>{
            return AXIOS
                  .get(URL_USERS_Detail)
                  .then( ({data})=> data )
      }
)



const initialState: InitialState = {
      loading: false,
      error: '',
      usersDetail: [] 
}

const UsersDetailSlice = createSlice({
      name: 'usersDetail',
      initialState,
      reducers: {},
      extraReducers: builder=> {
            builder.addCase(fetchUsersDetail.pending, (state)=>{
                  state.loading = true
            })

            builder.addCase(fetchUsersDetail.fulfilled, (state, action: PayloadAction<User[]>)=>{
                  state.error = '';
                  state.loading = false;
                  state.usersDetail = action.payload;
            })

            builder.addCase(fetchUsersDetail.rejected, (state, action)=>{
                  state.loading = false;
                  state.usersDetail = [];
                  state.error = action.error.message || 'Something went wrong';
            })
      }
});

export default UsersDetailSlice.reducer;