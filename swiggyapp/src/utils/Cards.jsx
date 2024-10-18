import React from 'react';
import { Res_url } from "../utils/logo";
import Rating from './Rating';
const Cards = ({ res }) => {
  console.log();
  console.log();
  return (
    <div className="w-[273px] m-2">
      <div className="h-[182px] rounded-[10px] overflow-hidden relative">
        <img
          src={Res_url + res.info.cloudinaryImageId}
          className="c"
          alt="Image"
        />
       {res?.info?.aggregatedDiscountInfoV3 ? (
  <div className="image-overlay absolute top-0 left-0 w-full h-full text-white font-bold flex items-end pl-10">
    {res?.info?.aggregatedDiscountInfoV3?.header + " " + res?.info?.aggregatedDiscountInfoV3?.subHeader}
  </div>
) : <></>}
      </div>
      <div className="font-bold">
        {res?.info?.name}
      </div>
      <div className="inline font-semibold">
        <Rating className="inline" />
        {res?.info?.avgRating}    <span>{res?.info?.sla?.slaString}</span>
      </div>
      <div className="font-light">
        {res?.info?.cuisines.join(",")}
      </div>
    </div>
  );
};

export default Cards;
