import {useState,useEffect} from "react";
const useOnline=()=>{
    const [online,setonline]=useState(true);
    useEffect(()=>{
        window.addEventListener("online",()=>{
            setonline(true);
        })
        window.addEventListener("offline",()=>{
            setonline(false);
        })
    },
[])
    return online;
}
export default useOnline;