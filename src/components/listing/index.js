import axios,{useRef} from "axios";
import React,{useEffect,useState} from "react"

import {url} from "../../util";

function Listing() {
    const [list, setList]=useState([]);
   
    useEffect(()=>{
        axios.get(url).then((res)=>{
            res.data && setList([...res.data]);
            console.log("more on this", res)
        })
    },[])
    const scrolltoid=(id)=>{
        
        let elemento=document.getElementById(id);
        elemento.scrollIntoView();
        elemento.style.background='red';
        
    }
    
  return (
    <>
     <input type={"number"}
     onChange={(e)=>scrolltoid(e.target.value)}
     className="searchInput" placeholder="Search by using Id"/>
    <div  className="listing">
   
    <table>
    <thead>
  <tr>
    <th>Id</th>
    <th>UserId</th>
    <th>Title</th>
  </tr>
  </thead>
  <tbody>
 
  {
        list && list.map((item,index)=>{
            return(
                 <tr id={item.id} key={index}>
                 <td>{item.id}</td>
                 <td>{item.userId}</td>
                 <td>{item.title}</td>
               </tr>
            )
        })
     }
</tbody>  
</table>
    </div>
    </>
  );
}

export default Listing;
