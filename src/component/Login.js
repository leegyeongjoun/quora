import React, { useState } from 'react';
import { ArrowForwardIos } from '@material-ui/icons';
import {auth, facebookLogin, provider} from './firebase'
import '../css/Login.css'
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //구글아이디 로그인
    const signIn =() => {
        auth.signInWithPopup(provider).catch((e) => alert(e.message));

        console.log(auth);
    }

    //페이스북 로그인
     const singInFacebook = () => {
         auth.signInWithPopup(facebookLogin).catch((e)=>alert(e.message));
  
        //  console.log(auth);
  
     }

    // 로그인버튼
    const handleLogin = (e) =>{
        e.preventDefault();

        //서버에 이메일과 패스워드가 있는지 확인
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth);
        }).catch((e)=>alert(e.message))

        // 그 후 이메일과 패스워드를 초기화 시키기 위해서
        setEmail('');
        setPassword('');
    }
    //회원가입 버튼
    const handleRegister = (e) => {
        e.preventDefault();
        // value에 넣었던 이메일과 패스워드 값을 토대로 계정을 만든다.
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            if (auth) {
                console.log(auth)
            }

        }).catch((e) => alert(e.message))
        setEmail("");
        setPassword("");
    };
    return (
        <div className='login'>
            <div className="login_container">
                <div className="login_logo">
                    <img src="https://qph.fs.quoracdn.net/main-qimg-d049946241e53481209a8938b70321e0" alt="로고" />
                </div>
                <div className="login_desc">
                    <p> 리액트 </p>
                    <h3> 리액트2 </h3>
                </div>
                <div className="login_auth">
                    <div className="login_authOptions">
                        <div className="login_authOption">
                            <img className='login_gooogleAuth goggleimg' src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg" alt="google" />
                            <p onClick={signIn} className='googleP'>구글 아이디로 로그인</p>
                        </div>
                        <div className="login_authOption">
                            <img className='login_gooogleAuth' src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png" alt="google" />
                            <p onClick={singInFacebook} >페이스북 아이디로 로그인</p>
                        </div>
                        <div className="login_authDesc">
                            <p>
                                <span style={{color: 'blue', cursor:'pointer'}}>
                                이메일로 회원가입
                                </span>
                                시 본사의 <p>
                                    <span style={{color: "blue", cursor: "pointer"}}>
                                    개인정보정책{" "}
                                    </span>
                                </p>
                                과 {" "}
                                <span style={{color: "blue", cursor: "pointer"}}>
                                    서비스 제공 정책
                                </span>
                                에 동의하는 것으로 간주합니다
                            </p>
                        </div>
                    </div>
                    <div className="login_emailPass">
                        <div className="login_label">
                            <h4> 로그인 </h4>
                        </div>
                        <div className="login_inputFields">
                            <div className="login_inputField">
                                <input type="text" placeholder='이메일' value={email} onChange={(e)=>setEmail(e.target.value)} />
                            </div>
                            <div className="login_inputField">
                                <input type="password" placeholder='비밀번호' value={password} onChange={(e)=>setPassword(e.target.value)} />
                            </div>
                        </div>
                        <div className="login_forgButt">
                            <small> 비밀번호 찾기 </small>
                            <button type='submit' onClick={handleLogin}>로그인</button>
                        </div>
                        <button onClick={handleRegister}>회원가입</button>
                    </div>
                </div>
                <div className="login_lang">
                    <p>언어 설정</p>
                    <ArrowForwardIos fontSize='small'/>
                </div>
                <div className="login_footer">
                    <p>About</p>
                    <p>오시는길</p>
                    <p>비즈니스문의</p>
                    <p>이용약관</p>
                    <p>&copy; 개인정보처리방침</p>
                </div>
            </div>
        </div>
    );
}

export default Login;