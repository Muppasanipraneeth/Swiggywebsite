import {useState,useEffect} from "react";
export const useResMenu =(restaurantId)=>{
    const [menuCards, setMenuCards] = useState([]);
    const fetchData= async()=>{
        const jsons=await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4875418&lng=78.3953462&restaurantId=${restaurantId}`);
        const data=await jsons.json();
        console.log("menu");
        const realdata=data?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        const d=realdata.filter((res)=>res?.card?.card?.['@type']=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
        console.log(d);
        console.log("this real");
        setMenuCards(d);
        console.log(data?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
        // setMenuCards(data?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    }
    useEffect(()=>{
        fetchData();
    },[]);


    return menuCards;
}
export default useResMenu;