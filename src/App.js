import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Login from './component/Login';
import Quora from './component/Quora';
import { selectUser } from './features/userSlice';

function App() {
  // useSelector 리덕스의 상태값을 조회하기위한 훅 함수 여기선
  // userSlice.js에서 state => state.user.user를 가져옴으로 현재 state에 createSlice action에 따른 user의 상태값을 넣어주는 것으로 이해하면 된다.
  // user를 가져오려면
  const user = useSelector(selectUser);

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
