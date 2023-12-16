import React from "react";
import './home.scss';
import CustomBarChart from "../CustomBarChart";
import CustomLineChart from "../CustomLineChart";
import Data from "../Data";
import Card from "../Card";

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
              <Card name="Products" icon={BsFillArchiveFill} number={300} />
              <Card name="Categories" icon={BsFillGrid3X3GapFill} number={12} />
              <Card name="Customers" icon={BsPeopleFill} number={33} />
              <Card name="Alerts" icon={BsFillBellFill} number={57} />

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