import React from "react";
import './home.scss';
import CustomBarChart from "../CustomBarChart";
import CustomLineChart from "../CustomLineChart";
import Data from "../Data";

import {BsFillArchiveFill,
    BsFillGrid3X3GapFill,
    BsPeopleFill,
    BsFillBellFill
  } from 'react-icons/bs';
  
const Home=()=>{
   


    return(
      <div className="main">
        
        <div className="main-container">
            <div className="main-title">
                <h3>DASHBOARD</h3>
            </div>
            <div className="main-cards">
                <div className="card">
                <div className="card-inner">
                    <h3>PRODUCTS</h3>
                    <BsFillArchiveFill className="card-icon"/>
                    
                </div>
                <h1>300</h1>
                </div>
                <div className="card">
                <div className="card-inner">
                    <h3>Categories</h3>
                    <BsFillGrid3X3GapFill className="card-icon"/>
                    
                </div>
                <h1>12</h1>
                </div>
                <div className="card">
                <div className="card-inner">
                    <h3>Customers</h3>
                    <BsPeopleFill className="card-icon"/>
                    
                </div>
                <h1>33</h1>
                </div>
                <div className="card">
                <div className="card-inner">
                    <h3>Alerts</h3>
                    <BsFillBellFill className="card-icon"/>
                    
                </div>
                <h1>42</h1>
                </div>

            </div>
            <div className="charts">
              <CustomBarChart data={Data}/>
              <CustomLineChart data={Data}/>
       
     
      </div>

        </div> 
        </div>

    )
};
export default Home;