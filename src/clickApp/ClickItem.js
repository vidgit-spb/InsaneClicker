import React, {useState,useEffect} from 'react';


export default function ClickItem(){

    const [count,setCount] = useState(0);

    useEffect(()=>{
          
    })
    return(
        <ul>
        <li onClick = {()=>setCount(count+1)}> {count}</li>
        </ul>)
}
