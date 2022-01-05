import { useEffect, useState } from "react";
import Merchandise from "./Merchandise";
function Dashboard({user, onAdd}) {
  console.log(user.vendors)
  const [merchToDisplay, setMerchToDisplay] = useState([])
  
  useEffect(()=> {user.vendors.map((vendor)=> fetchMerch(vendor.id))},[])
  
  function fetchMerch(id){
    console.log(id)
    fetch(`/vendorsmerch/${id}`)
    .then(resp=>resp.json())
    .then(data=>{ 
      if (data !==null){
        getMerch(data.id)
      } 
      })
  }
  
  function getMerch(id){
    fetch(`/merchandises/${id}`)
    .then(resp=>resp.json())
    .then(data=>{
          console.log(id,merchToDisplay)
          setMerchToDisplay(merchToDisplay=>[...merchToDisplay, data])           
  })
  }  

    return (
      <div>
      {console.log(merchToDisplay)}
       <h2>{user.name}'s happy place</h2>
       <div className="merchContainer">
       {merchToDisplay.map((item)=><Merchandise key={item.id} id={item.id} item={item} allStore={true} dashboard={true} onAdd={onAdd}/>)}
       </div>
      </div>
      )
  }

  export default Dashboard;