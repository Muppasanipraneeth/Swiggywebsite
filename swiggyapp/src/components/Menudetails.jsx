import { MdArrowDropDown } from "react-icons/md";
import Menucard from "./Menucard";

const Menulist=(props)=>{
    // const [drop,setdrop]=useState(false);
    const{showItems,setshowIndex}=props;
    const {title,itemCards}=props.card.card;
    const Drop=()=>{
        setshowIndex();
        // console.log("drop called");
        // if(drop){
        //     setdrop(false);
        // }else{
        //     setdrop(true)
        // }
    }
    return(<>
    
    <div className="justify-center items-center border-5 shadow-sm ml-32 mr-20" onClick={Drop} >
        <div className="font-bold flex  justify-between ">
            <span className="ml-32"> {title} ({itemCards.length})</span>
    
            <span className="mr-48" >
                <MdArrowDropDown className="inline" />
            </span>

        </div>
        {showItems?<div>
            {itemCards.map((res,ind)=>(<Menucard  res={res.card.info}/>))}
        </div>:<div></div>}


    </div>
    </>)
}
export  default Menulist;