import React from 'react';
import { FaTwitterSquare,FaLinkedin,FaGithubSquare,FaInstagramSquare,FaSearch} from "react-icons/fa";
import './Topbar.css';

function Topbar() {
  return (
    <div className='top'>
      <div className="topLeft">
        <span className='topIcon'><FaTwitterSquare/></span>
        <span className='topIcon'><FaLinkedin/></span>
        <span className='topIcon'><FaGithubSquare/></span>
        <span className='topIcon'><FaInstagramSquare/></span>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListitem">HOME</li>
          <li className="topListitem">ABOUT</li>
          <li className="topListitem">CONTACT</li>
          <li className="topListitem">WRITE</li>
          <li className="topListitem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="pp image" className='ppimage'/>
        <span className='topsearch'><FaSearch/></span>
      </div>
    </div>
  )
}

export default Topbar