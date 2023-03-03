import { Home,  AssignmentIndOutlined, NotificationsOutlined, BorderAllRounded, PeopleAltOutlined, Search, Language } from '@material-ui/icons';
import React from 'react';
import { Avatar, Button } from '@material-ui/core';
import '../css/Navbar.css'
function Navbar() {
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
                    <Avatar />
                </div>
                    <Language/>
                    <Button> 질문하기 </Button>
                </div>
        </div>
    );
}

export default Navbar;