import { useEffect, useState } from "react";

function Merchandise({id, item, allStore, dashboard, onAdd,getUpdate, getDelete}) {
  console.log(item)
  const [itemPicture, setItemPicture] = useState()
  const [showForm, setShowForm] = useState(false)
  useEffect(()=>{
    fetch(`merchandises/${id}`)
    .then(resp => resp.json())
    .then(data=>{
        setItemPicture(data.merch)
    });
  },[]);
  function handleDelete(id){
    fetch(`merchandises/${id}`, {
      method: 'DELETE'
    })
  }
  const [merchData, setMerchData] = useState({
    vendor_id: item.vendor_id,
    item_name: item.item_name,
    price: item.price,
    description: item.description,
    inventory: item.inventory,
    is_sold_out: item.is_sold_out
  });
  const [merch, setMerch]= useState(null)
  function handleMerchDataChange(event){
    setMerchData({...merchData, [event.target.name]: event.target.value});
  }
  function handleMerchChange(event){
    setMerch(event.target.files[0])
  }
  function handleUpdate(event){
    event.preventDefault();
    const formData = new FormData()
    formData.append('vendor_id', item.vendor_id)
    formData.append('item_name', merchData.item_name)
    formData.append('price',merchData.price)
    formData.append('description', merchData.description)
    formData.append('inventory', merchData.inventory)
    formData.append('is_sold_out', false)
    formData.append('merch', merch)
    getUpdate(formData, item.id)
    setShowForm(!showForm)
    
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
       {allStore? null: <div className="store_merch"><button onClick={()=>getDelete(item.id)}>Delete</button><button onClick={()=>setShowForm(!showForm)}>Update</button></div>}
       {showForm? <form onSubmit={handleUpdate}>
         <label> Item Name: </label>
                <label>
                <input
                    type='text'
                    name='item_name'
                    value={merchData.item_name}
                    onChange={handleMerchDataChange}
                    placeholder="Item Name"
                />
                </label>
                <label> Price: </label>
                <label>
                <input
                    type='number'
                    name='price'
                    value={merchData.price}
                    onChange={handleMerchDataChange}
                    placeholder="Price"
                />
                </label>
                <label> Description: </label>
                <label>
                <input
                    type='text'
                    name='description'
                    value={merchData.description}
                    onChange={handleMerchDataChange}
                    placeholder="Description"
                />
                </label>
                <label> Inventory: </label>
                <label>
                <input
                    type='number'
                    name='inventory'
                    value={merchData.inventory}
                    onChange={handleMerchDataChange}
                    placeholder="Inventory"
                />
                </label>
                <label> Merchandise Picture: </label>
                <label>
                <input
                    type='file'
                    name='merch'
                    onChange={handleMerchChange}
                />
                </label>
                <input
                    type='submit'
                />
      </form>: null}
       {dashboard? <button className="add_to_cart" onClick={()=>onAdd(item)}>Add to cart</button>: null}
       </div>
      </div>
    );
  }
  
  export default Merchandise;