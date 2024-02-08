import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  googlestatus: false,
  supportstatus: false,
  moreaccountstatus: false,
  composestatus: false,
  responsivesidestatus: false,
};

export const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
   
    statusChange: (state, action) => {
      state.status = !state.status;
    },
    googlestatus: (state, action) => {
    
      state.googlestatus = action.payload;
    },
    supportstatus: (state, action) => {
      state.supportstatus = action.payload;
    },
    moreaccountstatus: (state, action) => {
      state.moreaccountstatus = action.payload;
    },
    moreaccountclose: (state, action) => {
      state.moreaccountstatus = action.payload;
    },
    composestatus: (state, action) => {
      state.composestatus = action.payload;
    },
    responsivesidestatus: (state, action) => {
      state.responsivesidestatus = action.payload;
    },
    bodystatus: (state,action) => {
     
      state.googlestatus=action.payload
      state.moreaccountstatus=action.payload
      state.responsivesidestatus=action.payload
      state.supportstatus=action.payload
   
      
  },
   
    
  },
  
});

export const {
  statusChange,
  googlestatus,
  supportstatus,
  moreaccountstatus,
  bodystatus,
  composestatus,
  moreaccountclose,
  responsivesidestatus,
} = statusSlice.actions;
export default statusSlice.reducer;
