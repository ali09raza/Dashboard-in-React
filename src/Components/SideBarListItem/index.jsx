import React from "react";
const SideBarListItem=(props)=>{
    const Icon=props.icon;
    return(
        <li className="sidebar-list-item">

                
                <a href="{props.link}">
                    <Icon className="icon"/>{props.name}
                </a>
                </li>
    )
    
}
export default SideBarListItem;