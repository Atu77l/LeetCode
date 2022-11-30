import React from 'react'
import './Footer.css'
import usa from '../../Image/usa.png';

const Footer = () => {
  return (
    <div className="footer">
        <div className="item">copyright @ 2022LeetCode</div>
        <div className="item">Help Center</div> |
        <div className="item">Jobs</div> |
        <div className="item">Bug Bounty</div> |
        <div className="item">Online Interview</div> |
        <div className="item">Students</div> |
        <div className="item">Terms</div> |
        <div className="item">Privacy Policy</div> |
        <div className="country">
        <img src={usa} className="country-image" alt="United States of America"></img>
        <div className="item">United States</div></div>
    </div>
  )
}

export default Footer