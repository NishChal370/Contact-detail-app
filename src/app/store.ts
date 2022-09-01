import { configureStore } from "@reduxjs/toolkit";
import UsersDetailSlice from "../feature/UsersDetailSlice";


const store = configureStore({
      reducer: {
            usersDetail: UsersDetailSlice,
      }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch