import { createSlice } from '@reduxjs/toolkit';

//createSlice 정보를 dispatch login인가 logout인가 
export const userSlice = createSlice({
  name: 'user',
  initialState:{
    user: null,
  },
  //login 아니면 logout reudcers의 actions이 들어오는데 createSlice덕분 
  reducers: {

    //payload: {title: 'fsagf', id: 1, uid:"dsadas", photo:"www.act.com", name:'dddd'}
    login: (state, action) => {
      //로그인을 했을 때 정보들을 component에서 받아올 것인데 이걸 user.state에 넣을 것이다. 개인정보내역 등 에서 가져오려면 서버에서 아이디에 대한 정보가 주면 이걸 어딘가에 넣어야하는데 payload 형태로 넣는다. 이걸 redux로 가져온 것 이게 끝이아니라 state에 넣어줄 것인데 .user라는 이름으로 넣어줄것이다. 
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

//createSlice와 같이 다니는게 userSlice.actions
export const { login, logout } = userSlice.actions;

//value == payload 밖으로 내보내는 것
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
