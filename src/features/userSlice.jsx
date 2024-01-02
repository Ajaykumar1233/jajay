import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "users",
    initialState: {
        users: []
    },
    reducers: {
        getUser: (state, action) => {

            state.users = action.payload.map(user => {
                return { 
                    id: user.id,
                     name: user.name, 
                     email: user.email, 
                     city: user.city 
                    }
              })
            },
        

    // ====== adddding a new user======

        adduser: (state, action) => {
            state.users.push(action.payload)

        },
        deleteUser: (state,action)=>{
            const id= action.payload.id
            state.users= state.users.filter((uid)=>uid!==id)
        },
        updateUser:(state,action)=>{
            const index= state.users.findIndex(x=>x.id==action.payload.id)
            state.users[index]={   
            name:action.payload.name,
            email: action.payload.email,
            city:action.payload.city,
            }
        }
    }
})

export const { getUser, adduser,deleteUser,updateUser} = userSlice.actions;
export default userSlice.reducer;
