import React from 'react';
import '../css/Quora.css'
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function Quora() {
    return (
        <div className='quora'>
            <Navbar/>
            <div className="quora_content">
                <Sidebar/>
            </div>
           
        </div>
    );
}
export default Quora