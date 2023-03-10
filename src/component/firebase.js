import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDpA8_w7dBsxE_Fj_YntZCgwMRiB5Vwu_4",
    authDomain: "quora-5d93c.firebaseapp.com",
    projectId: "quora-5d93c",
    storageBucket: "quora-5d93c.appspot.com",
    messagingSenderId: "842731481167",
    appId: "1:842731481167:web:2b88a679976881ca42623a",
    measurementId: "G-LBLTTQ40VQ"
  };

const firebaseapp = firebase.initializeApp(firebaseConfig);

//로그인
const auth = firebase.auth()

//구글 로그인
const provider = new firebase.auth.GoogleAuthProvider()

const facebookLogin = new firebase.auth.FacebookAuthProvider();
const db = firebaseapp.firestore()

// export 한개의 선언에서 여러개를 다른컴포넌트에서 import 해올 수 있다
//ex) export 과일 import{사과, 바나나, 딸기} from '과일'
export {auth, provider, facebookLogin}

//export default가 붙는 이유는 오로지 한개의 모듈만을 가져옴
//ex) export defalut 직선 import 직선 from 직선
export default db;