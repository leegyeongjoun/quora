import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { auth } from './component/firebase';
import Login from './component/Login';
import Quora from './component/Quora';
import { login, logout, selectUser } from './features/userSlice';

function App() {
  // useSelector 리덕스의 상태값을 조회하기위한 훅 함수 여기선
  // userSlice.js에서 state => state.user.user를 가져옴으로 현재 state에 createSlice action에 따른 user의 상태값을 넣어주는 것으로 이해하면 된다.
  // user를 가져오려면
  const user = useSelector(selectUser);
  const dispath = useDispatch();


  // useEffect 동기화
  useEffect(()=>{
    // firebase에서 auth에 대한 정보를 firebase에서 authUser를 가져옴 authUser가 맞다면 dispath쏠것이다 login에 payload를 전부해서 쏨 이 형태를 user에 넣어준다. 특정 컴포넌트에서 useSelector를 이용하면 seletcUser를 정의한 state의 정보를 user에 넣을 것이다.
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispath(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          displayName: authUser.displayName,
          email: authUser.email
        }))
        console.log(authUser)
      }
      else{
        dispath(logout())
      }
    })
  },[dispath])

  return (
    <div className='App'>
      { 
        // O = TURE , X = FALSE 뭐라도 있으면 Quora 페이지로 이동
        user ? (<Quora/>) : (<Login/>)
      }
    </div>
  );
}

export default App;
