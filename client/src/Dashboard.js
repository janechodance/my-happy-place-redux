import { useEffect, useState } from "react";
import Merchandise from "./Merchandise";
function Dashboard({user}) {
  console.log(user.vendors)
  const [merchToDisplay, setMerchToDisplay] = useState([])
  
  useEffect(()=> {user.vendors.map((vendor)=> fetchMerch(vendor.id))},[])
  useEffect(()=> {
    console.log("merchToDisplay", merchToDisplay)}, [merchToDisplay])
  function fetchMerch(id){
    fetch(`/vendorsmerch/${id}`)
    .then(resp=>resp.json())
    .then(data=>{ getMerch(data.id)
      
      })
  }
  
  function getMerch(id){
    fetch(`/merchandises/${id}`)
    .then(resp=>resp.json())
    .then(data=>{console.log("merch", data)
          console.log(id,merchToDisplay)
          setMerchToDisplay(merchToDisplay=>[...merchToDisplay, data])   
          
  })
  }  
    return (
      <div>
      {console.log(merchToDisplay)}
       <h2>Dashboard</h2>
       <h3>render the merchandise from your subscribed stores</h3>
       {merchToDisplay.map((item)=><Merchandise key={item.id} id={item.id} item={item}/>)}
      </div>
      )
  }

  export default Dashboard;