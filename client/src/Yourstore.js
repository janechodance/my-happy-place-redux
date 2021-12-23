import {useEffect, useState} from "react"
import Merchandise from "./Merchandise";
function Yourstore({user}) {
    console.log(user)
    const [store, setStore]= useState()
    useEffect(()=>{
      fetch('vendors/1')
      .then(resp => resp.json())
      .then(data=>{
          setStore(data);
          console.log(data)
      });
  },[]);
    return (
      <div>
      {store? <><h2>Your store</h2>
      <img src={store.logo} height="200px" width="200px" alt='logo'/>
      <h2>Store name: {store.vendor.store_name}</h2>
      <h2>Category: {store.vendor.category}</h2>
      <h2>Description: {store.vendor.description}</h2>
      {store.vendor.merchandises.map((item)=> <Merchandise item={item}/>)}
      
      </>: 
      
      <h2>Add a store</h2>}
      
       
      </div>
    );
  }
  
  export default Yourstore;