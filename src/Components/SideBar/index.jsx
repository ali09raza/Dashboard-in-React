import React from "react";

import SideBarListData from "../SideBarListData";
import ListingSideBar from "../ListingSideBar";
import
{BsCart3}
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
                <ListingSideBar listingData ={SideBarListData}/>
                
          
            </ul>
        </aside>
        
        
        
        

    )
};
export default SideBar;