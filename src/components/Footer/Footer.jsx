import React from 'react'
import './Footer.css'
import logo from '../../assets/lo.png' 
import user from '../../assets/user.png'
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="top-left">
          <img className='prrr' src={logo} alt="" />
          <p>
            I am a Full-Stack Web Developer learning to building scalable and
            modern applications.
          </p>
        </div>
        <div className="top-right">
          <div className="Email">
            <img src={user} alt="" />
            <input type="email" placeholder="Enter Your Email" />
          </div>
          <div className="follow">Follow</div>
        </div>
      </div>
      <hr />
      <div className="bottom">
        <p className="bottom-left">© 2025 Pratyush Basak. All rights reserved.</p>
        <div className="bottom-right">
            <p>Term of services</p>
            <p>Privacy Policy</p>
            <p>Connect With me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer