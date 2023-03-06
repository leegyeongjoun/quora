import React from 'react';
import '../css/Feed.css'
import Post from './Post';
import QuoraBox from './QuoraBox';
function Feed() {
    return (
        <div className='feed'>
            <QuoraBox/>
            <Post/>
        </div>
    );
}

export default Feed;