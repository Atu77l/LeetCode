import React from 'react'
import './Navabar.css';
import star from '../../Image/star-icon.jpg';
import store from '../../Image/store.jpg';
import Image from '../../Image/leetcode_logo.svg'

const Navbar = () => {
  return (
    <div className="nav">
        <img src={Image} className="logo-image" alt="LeetCode"></img>
        <div className="item">Explore</div>
        <div className="item">Problems</div>
        <div className="item">Interview</div>
        <div className="item">Contest</div>
        <div className="item">Discuss</div>
        <div className="store">
            <img src={store} className="store-image" alt="store">
            </img>
            <div className="item">Store</div>
        </div>
        <div className="prem">
            <img src={star} className="premium-image" alt="Premium">
            </img>
            <div className="item1">Premium</div>
        </div>
    </div>
  )
}

export default Navbar