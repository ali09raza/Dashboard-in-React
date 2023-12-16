import React from "react";
import SideBarListItem from "../SideBarListItem";
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
                <SideBarListItem icon={BsGrid1X2Fill} name="Dashboard" link="https://www.google.com/"/>
                <SideBarListItem icon={BsFillArchiveFill} name="Products" link="https://www.google.com/"/>
                <SideBarListItem icon={BsFillGrid3X3GapFill} name="Categories" link="https://www.google.com/"/>
                <SideBarListItem icon={BsPeopleFill} name="Customer" link="https://www.google.com/"/>
                <SideBarListItem icon={BsListCheck} name="Inventory" link="https://www.google.com/"/>
                <SideBarListItem icon={BsMenuButtonWideFill} name="Response" link="https://www.google.com/"/>
                <SideBarListItem icon={BsFillGearFill} name="Settings" link="https://www.google.com/"/>
          
            </ul>
        </aside>
        
        
        
        

    )
};
export default SideBar;