import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {useResInfo} from "../utils/useResInfo"
import useResMenu from "../utils/useResMenu";
import Rating from "../utils/Rating";
import Menulist from "./Menudetails";
const MenuItem = (props) => {
   const { name ,description,rating ,className}=props;
    return (
        <div className={className}>
            <h1 className="">Name: <bold>{name}</bold></h1>
            <p> {rating}
                <br></br>
                {description} </p>
            <hr></hr> 

        </div>
    );
};
const ResMenu = () => {
    const [showIndex,setshowIndex]=useState(0);
    const { id } = useParams();
    const menu=useResInfo(id);
    const menuCards=useResMenu(id);
    const renderRestaurantInfo = (info) => (
        <div className="bg-white  justify-center items-center ml-32">
            <div className="font-extrabold text-[24px] p-4 ml-5 "> {info.name} </div>
            <div className=" border-2 rounded-[25px] shadow-gray-300 shadow-lg ml-10 mr-40 p-5">
            <div>
            <div className="font-semibold"><Rating className="inline"/> {info.avgRating} ({info.totalRatingsString}) .{info.costForTwoMessage} </div>
            <div className="text-[#ff5200]"> Healthy Food  , South india</div>
            <div className="">
                <div className="">

                </div>
               
                <div >
                Outlet :{info.locality}
                </div>
                <div className="">
                {info.sla.slaString}
                </div>
            </div>
            
           
             
            <p>Discount: {info.aggregatedDiscountInfo?.header}</p>
            </div>
            </div>
            
          
        </div>
    );
    return (
        <div className="justify-cente">
<div className="flex ml-24">
  <div className="flex">
  <ul className="flex"> <li>
    <Link to={"/"}> Home/</Link>
  </li>
  <li>
    <Link>kukatpally/</Link>
     </li>
  </ul>
  </div>
    </div>            {menu ? (
                <>
                       {renderRestaurantInfo(menu)}
                    {menuCards.map((res, ind) => (
                        <Menulist key={ind} {...res} showItems={ind==showIndex?true:false} setshowIndex={()=>setshowIndex(ind)}/>
                    ))}
                </>
            ) : (
                <p>Loading menu...</p>
            )}
        </div>
    );
};
export default ResMenu;
