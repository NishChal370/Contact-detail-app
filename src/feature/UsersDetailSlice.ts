import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getUserImage from "../utils/getUserImage";
import { deleteUserDetail, fetchUsersDetail, putUserDetail } from "./requests";


type User = {
      id: number,
      name: string,
      email: string,
      phone: string,
      website: string,  
      avatar: string,
}

type InitialState ={
      loading: boolean,
      error: string,
      usersDetail: User[]
}



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
                  state.usersDetail = action.payload.filter(user => user['avatar'] = getUserImage())
            })

            builder.addCase(fetchUsersDetail.rejected, (state, action)=>{
                  state.loading = false;
                  state.usersDetail = [];
                  state.error = action.error.message || 'Something went wrong';
            })

            
            builder.addCase(putUserDetail.fulfilled, (state, action: PayloadAction<User>)=>{
                  state.error = '';
                  state.loading = false;

                  state.usersDetail = state.usersDetail.filter(presentDetail =>{
                        const { id, name, email, phone, website } = action.payload;
                        
                        if(presentDetail.id === id){
                              presentDetail.name = name
                              presentDetail.email = email
                              presentDetail.phone = phone
                              presentDetail.website = website
                        }

                        return presentDetail;
                  }); 
            })

            builder.addCase(putUserDetail.rejected, (state, action)=>{
                  state.loading = false;
                  state.usersDetail = [];
                  state.error = action.error.message || 'Something went wrong';
            })



            
            builder.addCase(deleteUserDetail.fulfilled, (state, action: PayloadAction<number>)=>{
                  state.error = '';
                  state.loading = false;
                  state.usersDetail = state.usersDetail.filter(presentDetail => presentDetail.id !== action.payload );

            })

            builder.addCase(deleteUserDetail.rejected, (state, action)=>{
                  state.loading = false;
                  state.usersDetail = [];
                  state.error = action.error.message || 'Something went wrong';
            })
      }
});

export default UsersDetailSlice.reducer;