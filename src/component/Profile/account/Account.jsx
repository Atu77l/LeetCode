import React from 'react'
import logo from './../../../Image/star-icon.jpg'

const Account = () => {
  return (
    <div className="account">
        <div className="detail">
        <img className="logo" src={logo} alt="profile"></img>
        <div className="name">Atul Kesharwani</div>
        <div className="rank">Rank 7171</div>
        </div>
        <div className="paragraph">
           <p className="about"> My Name is Atul Kesharwani.Currently, I am pursuing B.tech from Madan Mohan Malaviya University Of Technology,Gorakhpur.
            I am good at coding and passionate about writing code. I have solved more than 1200+ problem in many platform like as codechef ,codeforces, leetcode and hackerrank.</p>
        </div>
        <div className="item">
       <div className="location"></div> India
<div className="college">Madan Mohan Malaviya University Of Technology,Gorakhpur</div>
<div className="github">https://github.com/Atu77l</div>
<div className="portfolio"></div>
<div className="skill">C++,Data Structure and Algorithm,DBMS,Computer Network</div>
</div>
<u></u>
<div className="community">
    <h3>Community Stats</h3>
    <div className="views">Views</div>
    <div className="solution">Solution</div>
    <div className="discuss">Discuss</div>
    <div className="reputation">Reputation</div>
</div>
<div className="Skills">
    Data Structure and Algorithm
    Dynamic Programming
</div>



    </div>
  )
}

export default Account