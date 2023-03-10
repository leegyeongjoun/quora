import { Home,  AssignmentIndOutlined, NotificationsOutlined, BorderAllRounded, PeopleAltOutlined, Search, Language, ExpandMore, Link} from '@material-ui/icons';
import React, { useState } from 'react';
import { Avatar, Button, Input } from '@material-ui/core';
import '../css/Navbar.css'
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';
import { auth } from './firebase';
import Modal from 'react-modal';
function Navbar() {
    //auth 서버에 있는 정보는 user에 넣음 payload에서 이걸 state에 넣는다 userslice에서 이 state를  userSelector에 넣음
    //state에 대한 정보를 user에 넣을 것이다. user.photo는 즉 authUser.photoURL이 된것
    const user = useSelector(selectUser);

    const [openModal, setOpenModal] = useState(false);
    const [input, setInput] = useState('');
    const [inputUrl, setInputUrl] = useState('');
    return (
        <div className='navbar'>
            <div className="qHeader_logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/2880px-Quora_logo_2015.svg.png" alt="logo" />
            </div>
            <div className="qHeader_icons">
                <div className="qHeader_icon">
                    <Home/>
                </div>
                <div className="qHeader_icon">
                    <BorderAllRounded/>
                </div>
                <div className="qHeader_icon">
                    <AssignmentIndOutlined/>
                </div>
                <div className="qHeader_icon">
                    <PeopleAltOutlined/>
                </div>
                <div className="qHeader_icon">
                    <NotificationsOutlined/>
                </div>
            </div>

            <div className="qHeader_input">
                <input type="text" placeholder='검색하기' />
                <Search/>
            </div>

            <div className="qHeader_Rem">
                <div className="qHeader_avatar">
                    {/* 구글이미지 동기화 */}
                    <Avatar src={user.photo} onClick={() => auth.signOut()}/>
                </div>
                    <Language/>
                    <Button onClick={()=>{setOpenModal(true)}}> 질문하기 </Button>

                    <Modal isOpen={openModal} onRequestClose={()=> setOpenModal(false)} /* shouldCloseOnOverlayClick={false} */
                    style={{
                        overlay:{
                            width:700,
                            height:600,
                            backgroundColor:"lightgreen",
                            zIndex:"1000",
                            top:"50%",
                            left:"50%",
                            margintTop:"-300px",
                            marginLeft:"-350px",
                            borderRadius:"5px"
                        }
                    }}>
                        <div className="modal_title">
                            <h5> 질문 </h5>
                            <h5> 공유하기 </h5>
                        </div>
                        <div className="modal_info">
                            <Avatar src={user.photo}/>
                            <p> 질문자 : {user.displayName ? user.displayName : user.email}</p>
                            <div className="modal_scope">
                                <PeopleAltOutlined/>
                                <p> 전체공개 </p>
                                <ExpandMore/>
                            </div>
                        </div>

                        <div className="modal_Field">
                            <Input type="text" placeholder="6하 원칙으로 질문을 작성하세요" required value={input} onChange={(e)=> setInput(e.target.value)}/>
                            <div className="modal_fieldLink">
                                <Link/>
                                <Input type="text" placeholder="url 링크만을 작성해 주세요" value={inputUrl} onChange={(e)=> setInputUrl(e.target.value)}/>
                            </div>
                        </div>

                        <div className="modal_buttons">
                            <button type='text' className='add'> 질문하기 </button>
                            <button className='can' onClick={()=>{setOpenModal(false)}}>
                                닫기
                            </button>
                            
                        </div>
                    </Modal>
                </div>
        </div>
    );
}

export default Navbar;