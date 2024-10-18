import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import Cards from "../utils/Cards";
import Components from "./components";
import Topres from "./Toprest";
const Res=()=>{
    return (<>
          
          
    </>)
}


// import { v4 as uuidv4 } from 'uuid';

const Body = () => {
    const [reslist, setReslist] = useState([]);
    const [originalList, setOriginalList] = useState([]);
    const [showAll, setShowAll] = useState(true);
    const [search, setSearch] = useState("");
    const online=useOnline();
    const fetchData = async () => {
        const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4875418&lng=78.3953462&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const data = await res.json();
        // console.log(data?.data?.cards[1]);
        // console.log(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        return data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    };

    useEffect(() => {
        const initializeData = async () => {
            const restaurants = await fetchData();
            setReslist(restaurants);
            setOriginalList(restaurants);
        };
        initializeData();
    }, []);

    const toggleRestaurant = () => {
        if (showAll) {
            setReslist(originalList.filter((res) => res.info.avgRating > 4));
        } else {
            setReslist(originalList);
        }
        setShowAll(!showAll);
    };

    const handleSearch = () => {
        const filtered = originalList.filter((res) =>
            res.info.name.toLowerCase().includes(search.toLowerCase())  ||res.info.cuisines.some(cuisine => cuisine.toLowerCase().includes(search.toLowerCase()))

        );
        setReslist(filtered);
    };
if(online===false){
    return(<>
    <h1> Please check the internet connection</h1>
    </>)
}
   

    return(
        <><div>
<Components />
<Topres />
<div>
<div className=" ml-32 grid grid-cols-4 gap-3">
                 {Array.isArray(reslist) &&reslist.map((restaurant) => (
                    <Link className="res-list" key={restaurant.info.id} to={`/Restaurant/${restaurant.info.id}`}>
                    <Cards res={restaurant}/>
                    </Link>                   
                        
                    
                ))}
            </div>
</div>
</div>
        </>
    );
};

export default Body;
{/**  <div className="filter">
                <div className="Search">
                    <input
                        type="text"
                        className="Search-text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
                <button className="filter-btn" onClick={toggleRestaurant}>
                    {showAll ? 'Top-Restaurant' : 'Show All'}
                </button>
            </div> */}