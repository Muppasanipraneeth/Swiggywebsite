import { useDispatch } from "react-redux";
import { addItem } from "../utils/Cardslice";
const Menucards = (props) => {
    const imgurl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";
const {res}=props;
const dispatch=useDispatch();
const handleAddItem=(res)=>{
    dispatch(addItem(res));

}


    return (
        <div className="  shadow-sm p-2 m-4 flex">
            <div className="w-6/12">
            <div className="text-left font-semibold ">{res.name}
              
              </div>
              <div>{parseFloat(res.finalPrice) / 100}</div>
              <div>
                  {res.description}
              </div>
            </div >
            <div className="w-3/12 mt-4 relative">
    <img className="object-cover w-full h-full" src={imgurl + res.imageId} alt={res.name} />
    <div className="  ml-16 rounded-[25px] absolute bottom-0 left-0 right-0 text-center items-center justify-center bg-[#f8f8f8] w-[140px] h-[25px] text-green-600 p-2" onClick={()=>handleAddItem(res)}>Add</div>
</div>

        </div>
    );
};

export default Menucards;
