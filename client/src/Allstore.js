import { useEffect, useState } from "react";
import Merchandise from "./Merchandise";

function Allstore({user, loggedInUser, setRefresh, refresh}) {
  const [vendors, setVendors] = useState([])
  const [show, setShow]= useState(false)
  const [showMerch, setShowMerch] = useState([])
  
  useEffect(()=>{
    fetch('/vendors')
    .then(resp => resp.json())
    .then(data=>{
        setVendors(data)
    });
  },[]);
  function handleShowMerch(id){
    setShow(!show)
    setShowMerch([])
    fetch(`/vendors/${id}`)
    .then(resp => resp.json())
    .then(data=>{
      console.log(data.vendor.merchandises)
      setShowMerch(data.vendor.merchandises)
  });
  }
  function handleSubscribe(vendor_id){
    console.log(vendor_id, user.id)
    const subscription = {
      'vendor_id': vendor_id,
      'user_id': user.id
    }
    fetch('/subscriptions',{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(subscription)
    })
    .then(resp => resp.json())
    .then(data=>{console.log(data)
    setRefresh(!refresh)})
  }
  
  
    return (
      <div>
       
       {vendors.map((vendor)=> <ul key={vendor.id}><div onClick={()=>handleShowMerch(vendor.user_id)}>{vendor.store_name}</div><div>Category: {vendor.category}</div><div>Description: {vendor.description}</div><div>{loggedInUser ?<button onClick={()=>handleSubscribe(vendor.id)}>Subscribe</button>: null}</div></ul>)}
       <div className="merchContainer">
       {show&&showMerch!==[]? showMerch.map((item)=> <Merchandise key={item.id} id={item.id} item={item} allStore={true} loggedInUser={loggedInUser}/> ) : null}
       </div>
      </div>
      
    );
  }
  
  export default Allstore;