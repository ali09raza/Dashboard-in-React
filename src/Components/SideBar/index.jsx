import React from "react";
import
{BsCart3,BsGrid1X2Fill,BsFillArchiveFill,BsFillGrid3X3GapFill,
BsPeopleFill,BsListCheck,BsMenuButtonWideFill,BsFillGearFill}
from 'react-icons/bs';
import './sideBar.scss'
const SideBar=()=>{
    return(
        <aside id="sidebar">
            <div className="sidebar-title">
                <div className="sidebar-brand">
                    <BsCart3 className="icon-header"/>SHOP
                </div>
                <span className="icon-close">X</span>
            </div>
            <ul className="sidebar-list">
                <li className="sidebar-list-item">

                
                <a href="https://www.google.com/">
                    <BsGrid1X2Fill className="icon"/>Dashboard
                </a>
                </li>
                <li className="sidebar-list-item">

                
                <a href="https://www.google.com/">
                    <BsFillArchiveFill className="icon"/>Products
                </a>
                </li>
                <li className="sidebar-list-item">

                
                <a href="https://www.google.com/">
                    <BsFillGrid3X3GapFill className="icon"/>Categories
                </a>
                </li>
                <li className="sidebar-list-item">

                
                <a href="https://www.google.com/">
                    <BsPeopleFill className="icon"/>Customer
                </a>
                </li>
                <li className="sidebar-list-item">

                
                <a href="https://www.google.com/">
                    <BsListCheck className="icon"/>Inventory
                </a>
                </li>
                <li className="sidebar-list-item">

                
                <a href="https://www.google.com/">
                    <BsMenuButtonWideFill className="icon"/>Response
                </a>
                </li>
                <li className="sidebar-list-item">

                
                <a href="https://www.google.com/">
                    <BsFillGearFill className="icon"/>Settings
                </a>
                </li>
            </ul>
        </aside>
        
        
        
        

    )
};
export default SideBar;