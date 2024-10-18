import {useState,useEffect} from "react";
export const useResInfo=(restaurantId)=>{
    const [resInfo,setresInfo]=useState(null);
    useEffect(()=>{
        fetchData();
    },[])
   const fetchData=async()=>{
    const data=await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4875418&lng=78.3953462&restaurantId=${restaurantId}`);
    const json=await data.json();
    setresInfo(json?.data?.cards?.[2]?.card?.card?.info);



   }
    return resInfo;
}
export default useResInfo;