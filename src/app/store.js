import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
// configureStore create stroe를 API화 해와서 사용하기 쉽게
// 데이터 레이어를 만들어 주는 역할
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
})


//store란 
//state값들을 저장하는 장소인데 reducer에서 전달받은 action을 redux의 dispatch함수를 사용하여 store로 전달합니다. store createStore를 통해서 만들 수 있고 createStroe안에 reducer 역할을 하는 함수가 들어 가야한다.
// 즉 createstore는 store를 구성하겠다는것 reduce를통해 userslice에서 갱신된 정보를 가져와서 데이터 레이어를 만들어주는 역할이다
