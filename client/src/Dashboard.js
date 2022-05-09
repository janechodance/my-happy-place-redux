import { useEffect, useState } from "react";
import Merchandise from "./Merchandise";
function Dashboard({user, onAdd}) {
  console.log(user.vendors)
  const [merchToDisplay, setMerchToDisplay] = useState([])
  const [refresh, setRefresh] = useState(false)
  
  
  useEffect(()=> {user.vendors.map((vendor)=> fetchMerch(vendor.id))},[])
  
  function fetchMerch(id){
    console.log(id)
    fetch(`/vendorsmerch/${id}`)
    .then(resp=>resp.json())
    .then(data=>{ 
      if (data !==[]){
        let newMerchToDisplay = merchToDisplay
        data.map((item)=>newMerchToDisplay.push(item))
        console.log(newMerchToDisplay)
        setMerchToDisplay(newMerchToDisplay)
        setRefresh(!refresh)
      } 
      })
  }
     return merchToDisplay !==[]? (
      <div>
        {console.log(merchToDisplay.length)}
      {console.log(merchToDisplay)}
       <h2 className="happy_place">{user.name}'s happy place</h2>
       <div className="merchContainer">
       {merchToDisplay.map((item)=><Merchandise key={item.id} id={item.id} item={item} allStore={true} dashboard={true} onAdd={onAdd}/>)}
       </div>
      </div>
      ):<h1>Happy place is coming!</h1>
  }

  export default Dashboard;