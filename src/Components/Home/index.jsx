import React from "react";
import './home.scss'

import {BsFillArchiveFill,
    BsFillGrid3X3GapFill,
    BsPeopleFill,
    BsFillBellFill
  } from 'react-icons/bs';
  import {
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar,
    LineChart,
    Line
  } from 'recharts';
const Home=()=>{
    const data = [
        {
          "name": "Page A",
          "uv": 4000,
          "pv": 2400
        },
        {
          "name": "Page B",
          "uv": 3000,
          "pv": 1398
        },
        {
          "name": "Page C",
          "uv": 2000,
          "pv": 9800
        },
        {
          "name": "Page D",
          "uv": 2780,
          "pv": 3908
        },
        {
          "name": "Page E",
          "uv": 1890,
          "pv": 4800
        },
        {
          "name": "Page F",
          "uv": 2390,
          "pv": 3800
        },
        {
          "name": "Page G",
          "uv": 3490,
          "pv": 4300
        }
      ]


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
        <BarChart width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
        <LineChart width={730} height={250} data={data}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="pv" stroke="#8884d8" />
  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
</LineChart>
      </div>

        </div> 
        </div>

    )
};
export default Home;