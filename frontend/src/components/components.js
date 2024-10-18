import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from "react";

const Components = () => {
    const [category, setCategory] = useState([]);
    const [slide, setSlide] = useState(0);

    const fetchData = async () => {
        const data = await fetch("http://localhost:5000/categories");
        const json = await data.json();
        setCategory(json);
    };

    const right = () => {
        if (slide >= category.length - 8) {
            // setSlide(0);
            return ;
        } else {
            setSlide(slide + 3);
        }
        console.log(slide);
    };

    const left = () => {
        if (slide <= 0) {
            // setSlide(category.length - 1);
            return ;
        } else {
            setSlide(slide - 3);
        }
        console.log(slide);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="ml-32">
            <div className="flex justify-between m-4">
                <div>
                    <h2 className="font-extrabold">What's in your mind ?</h2>
                </div>
                <div className="flex mr-32">
                    <div
                        onClick={left}
                        className="flex items-center justify-center w-[35px] h-[35px] bg-[#02060c26] rounded-full m-1 cursor-pointer"
                    >
                        <FaArrowLeft />
                    </div>
                    <div
                        onClick={right}
                        className="flex items-center justify-center w-[35px] h-[35px] bg-[#02060c26] rounded-full m-1 cursor-pointer"
                    >
                        <FaArrowRight />
                    </div>
                </div>
            </div>
            <div className="flex overflow-hidden">
                { Array.isArray(category) &&category.map((cat, ind) => (
                    <div
                        key={ind}
                        className="w-[150px] shrink-0"
                        style={{
                            transform: `translateX(-${slide * 100}%)`,
                            transition: 'transform 0.5s ease-in-out'
                        }}
                    >
                        <img
                            src={`http://localhost:5000/images/${cat.image}`}
                            alt={cat.path}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Components;
