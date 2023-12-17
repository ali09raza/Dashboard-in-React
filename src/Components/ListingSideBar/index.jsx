import SideBarListItem from "../SideBarListItem";
const ListingSideBar=({listingData})=>{
    
    return listingData?.map((data, index)=>(
        <SideBarListItem 
        key={index}
        icon={data.icon}
        name ={data.name}
        link={data.link}
         />
    )
    )

}
export default ListingSideBar;