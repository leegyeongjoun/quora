import { Avatar } from '@material-ui/core';
import React from 'react';
import '../css/QuoraBox.css'
function QuoraBox() {
    return (
        <div className='quoraBox'>
            <div className="quoraBox_info">
                <Avatar/>
                <h5> 리액트 </h5>
            </div>
            <div className="quoraBox_quora">
                <p>무엇이 궁금하신가요?</p>
            </div>
        </div>
    );
}

export default QuoraBox;