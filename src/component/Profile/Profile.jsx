import React from 'react'
import './Profile.css'
import Line from './chart/Line'
import Bar1 from './chart/Bar1'
import Pie1 from './chart/Pie1'
import Tab from  './Problem-Tab/Tab'
import Account from './account/Account'


const Profile = () => {
  return (
        <div className="main-profile">
            <div className="profile-detail">
              <Account/>
            </div>
            <div className="profile-side">
            <div className="rating-and-graph">
            <Line/><Bar1/>
            {/* <div className="rating"><Line/></div>
            <div className="graph"><Bar1/></div> */}
            </div>
      
            <div className="Number-of-question-and-badge">
                <div className="Number-of-question"><Pie1/></div>
                {/* <div className="Badges"></div> */}
            </div>
            <div className="problem-solved">
            <Tab/>
            
            </div>
            </div>
        </div>
  )
}

export default Profile