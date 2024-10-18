import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { CiSearch } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Usercontext from "../utils/Usercontext";
import { useSelector } from "react-redux";


// Placeholder image URL
const Log_url="data:image/jpeg;base64,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";

const Navbar = () => {
  const [login, setLogin] = useState(true);
  const [toggle,settoggle]=useState();
  const online = useOnline();
  const cart=useSelector((store)=>store.cart.items);
  console.log(cart);
  const {username}=useContext(Usercontext);
  console.log(username);
  const links = [
    {
      name: "search",
      icon: <CiSearch />,
      to:"/Search"
    },
    {
      name: "offers",
      icon: <BiSolidOffer />,
      sup:"new",
      to:"/Search"
    },
    {
        name: "help",
        icon: <IoHelpBuoyOutline/>,
        to:"/Search"
      },
    {
      name: "login",
      icon: <FaRegUser />,
      to:"/Login"
    },
    {
      name: "cart",
      icon: <FaShoppingCart />,
      sup:cart.length,
      to:"/Cart"
    },{
      name:username,
      to:"/user"

    }
  ];

  const checkLogin = () => {
    setLogin(!login);
  };
  const showsidemenu=()=>{
    settoggle(true);
  }
  const hidemenu=()=>{
    settoggle(false);
  }

  return (<>
  <div className="over-lay w-full h-full fixed duration-500" onClick={hidemenu} style={{
    opacity:toggle ? 1:0,
    visibility:toggle ? "visible":"hidden"
  }}>
    <div className="w-[500px] h-full bg-white" onClick={(e)=>{e.stopPropagation()}}>
<span className="pl-2"> <RxCross2 onClick={hidemenu} /> </span>
    </div>
  </div>
    <div className="flex  items-center p-4 shadow-xl">
      <div className="flex-shrink-0 pl-8">
        <Link to="/">
          <img className="w-10 h-10 pl-1" src={Log_url} alt="Logo" />
        </Link>
      </div>
      <div className="pl-4">
      <span className="font-bold border-b-black border-b-[1px] hover:text-[#ffa700] hover:border-b-[#ffa700] " >  other     </span>   kukatpally, Hyderbad <IoIosArrowDown  className="inline text-[#ffa700]" onClick={showsidemenu}/>
      </div>
      <div className="flex ml-auto">
        <ul className="flex space-x-4">
          {links.map((link, index) => (
            <li key={index} className="flex items-center space-x-5 hover:text-[#ffa700]">
              {link.icon}
              <Link to={link.to}>
              <span>{link.name}</span>
              </Link>
              <sup className="text-[#ffa700]"> {link.sup}</sup>

            </li>
          ))}
        
        </ul>
      </div>
    </div>
    </>
  );
};

const Header = () => {
  return <Navbar />;
};

export default Header;
