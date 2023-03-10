import { Avatar } from '@material-ui/core';
import { ArrowDownward, ArrowUpward, ChatBubbleOutlineOutlined, MoreHorizOutlined, RepeatOneOutlined, ShareOutlined } from '@material-ui/icons';
import React from 'react';
import '../css/Post.css';
import Modal from 'react-modal';

function Post() {
    
    return (
        <div className='post'>
            <div className="post_info">
                <Avatar/>
                <h5> 유저 아이디 </h5>
                <small> 작성시간 </small>
            </div>
            <div className="post_body">
                <div className="post_question">
                    <p> 질문내용 입니다. </p>
                    <button className='post_btnAnswer'>답변하기</button>
                </div>
                <div className="post_answer">
                    <p> 답변입니다. </p>
                </div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz1W29D7Nu4Vo72q9zuo_ov793RC-tqMaISA&usqp=CAU" alt="" />
            </div>
            <div className="post_footer">
                <div className="post_footerAction">
                    <ArrowUpward/>
                    <ArrowDownward/>
                </div>
                <RepeatOneOutlined/>
                <ChatBubbleOutlineOutlined/>
                <div className="post_footerRight">
                    <ShareOutlined/>
                    <MoreHorizOutlined/>
                </div>
            </div>
        </div>
    );
}

export default Post;