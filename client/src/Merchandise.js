import { useEffect, useState } from "react";

function Merchandise({id, item, allStore, dashboard, onAdd}) {
  console.log(item)
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
      <div className="each_merch">
       <div className="card">
       <img className="merch_image"src={itemPicture} height="200px" width="200px" alt='itemPicture'/>
       <div className="merch_info">
       <h2>Item: {item.item_name}</h2>
       <h2>Price: {item.price}</h2>
       <h2 className="merchDesc">Description: {item.description}</h2>
       <h2>{item.inventory!==0? "In stock": "Out of stock"}</h2>
       </div>
       {allStore? null: <button onClick={handleDelete}>Delete</button>}
       {dashboard? <button className="add_to_cart" onClick={()=>onAdd(item)}>Add to cart</button>: null}
       </div>
      </div>
    );
  }
  
  export default Merchandise;