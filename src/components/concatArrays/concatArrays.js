import { useEffect, useState } from "react";

const ConcanArrays=()=>{
    const[array, setArray]=useState([])
    useEffect(()=>{
        const Array1=[1,2,3,4,5];
        const Array2=[1,3,5,7,9]
        const Sumarray=[...Array1, ...Array2];
        const deduped = Array.from(new Set(Sumarray));
        setArray(deduped)
    },[])
   
console.log("data",array)
    return(
      
        <div>
<div>{ array}</div>
        </div>

    )
}
export default ConcanArrays;