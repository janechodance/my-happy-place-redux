import { useEffect, useState } from "react";

function Merchandise({id, item, allStore, dashboard, onAdd}) {
  const [itemPicture, setItemPicture] = useState()
  useEffect(()=>{
    fetch(`merchandises/${id}`)
    .then(resp => resp.json())
    .then(data=>{
        setItemPicture(data.merch)
    });
  },[]);
  function handleDelete(){
    fetch(`merchandises/${id}`, {
      method: 'DELETE'
    })
  }
    return (
      <div>
       
       <img src={itemPicture} height="200px" width="200px" alt='itemPicture'/>
       <h2>Item: {item.item_name}</h2>
       <h2>Price: {item.price}</h2>
       <h2 className="merchDesc">Description: {item.description}</h2>
       <h2>{item.inventory} in stock</h2>
       {allStore? null: <button onClick={handleDelete}>Delete</button>}
       {dashboard? <button onClick={()=>onAdd(item)}>Add to cart</button>: null}
      </div>
    );
  }
  
  export default Merchandise;