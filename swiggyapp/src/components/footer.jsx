const playstore="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png";
const applestore="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png";
const Footer=()=>{
    return (<>
    <div className="bg-[#02060c] w-full h-[500px]">
        <div className=" flex h-[100px] w-full bg-[#E9EAEC] justify-between">
            <div className="w-[400px] font-extrabold text-[#686868] ml-40 p-3  text-[24px]">
                For better experince, Download the  Swiggy app
            </div>
           <div className="flex mr-40">
           <div className="w-[201px] h-[61px] p-3">
                <img src={playstore} alt="playstore"></img>
            </div>
            <div className="w-[201px] h-[61px] p-3">
                <img src={applestore} alt="applestore"></img>
            </div>
           </div>
        </div>
        <div className="flex gap-3 mt-10 ml-36">
            <div className=" text-white inline">
              <div className="inline">
              <span >
               <img className="w-[50px]"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1FnIQEFOr5HVt3SSotU0dnnsf0HoCSo00nA&s"></img>
               </span>
               <div className=" font-bold items-center justify-center">Swiggy</div>
              </div>
               <div >
               © 2024 Bundl Technologies Pvt. Ltd
               </div>
            </div>
            <div className=" text-white inline p-4">
                <div className="font-bold m-3 text-[20px]">Company</div>
                <div>
                    <ul className="text-[18px]">
                        <li>About</li>
                        <li>Careers</li>
                        <li>Team</li>
                        <li>Swiggy one</li>
                        <li>Swiggy insta mart</li>
                        <li>Swiggy Genie</li>
                    </ul>
                </div>
            </div>
            <div className=" text-white p-4">
                <div className="font-bold m-3 text-[20px]">Contact Us</div>
                <div>
                    <ul className="text-[18px]">
                        <li>Help & Support</li>
                        <li>patner with us</li>
                        <li>Ride With us</li>
                       
                    </ul>
                </div>
            </div>
            <div className=" text-white p-4">
                <div  className="font-bold  text-[20px]"> Legal</div>
                <div>
                    <ul className="text-[18px]">
                        <li>Terms & Condition</li>
                        <li>Cookies & polices</li>
                        <li>privacy</li>
                        <li>Investor Relation</li>
                    
                    </ul>
                </div>
            </div>
            <div className=" text-white p-4 ">
                <div  className="font-bold  text-[20px]">We Delivery to</div>
                <div>
                    <ul className="text-[18px] text-gray-100">
                        <li>Banglore</li>
                        <li>Gurnog</li>
                        <li>Hyder bad</li>
                        <li>Delhi</li>
                    
                    </ul>
                </div>
            </div>
            

           
        </div>
    </div>
    </>);
}
export default Footer;