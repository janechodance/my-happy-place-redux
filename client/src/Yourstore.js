import {useEffect, useState} from "react"
import Merchandise from "./Merchandise";
function Yourstore({id, setRefresh, refresh}) {
    const [store, setStore]= useState()
    const [addMerchForm, setAddMerchForm]= useState(false)
    const [update, setUpdate] =useState(false)
    useEffect(()=>{
      console.log(id)
      fetch(`vendors/${id}`)
      .then(resp => resp.json())
      .then(data=>{
          setStore(data);
          console.log(data)
      });
  },[]);
    const [merchData, setMerchData] = useState({
      vendor_id: id,
      item_name: '',
      price: '',
      description: '',
      inventory: '',
      is_sold_out: false
    });
    const [merch, setMerch]= useState(null)
    function handleMerchDataChange(event){
      setMerchData({...merchData, [event.target.name]: event.target.value});
    }
    function handleMerchChange(event){
      setMerch(event.target.files[0])
    }
    function handleSubmit(event){
      event.preventDefault();
      const formData = new FormData()
      formData.append('vendor_id', id)
      formData.append('item_name', merchData.item_name)
      formData.append('price',merchData.price)
      formData.append('description', merchData.description)
      formData.append('inventory', merchData.inventory)
      formData.append('is_sold_out', false)
      formData.append('merch', merch)
      fetch('/merchandises', {
        method: 'POST',
        body: formData
      })
      .then(resp=> resp.json())
      .then(data => console.log(data))
      setMerchData({
        vendor_id: id,
        item_name: '',
        price: '',
        description: '',
        inventory: '',
        is_sold_out: false
      })
      setMerch(null)
    
    }
    return (
      <div>
      {store? <>
      <img src={store.logo} height="200px" width="200px" alt='logo'/>
      <h2>Store name: {store.vendor.store_name}</h2>
      <h2>Category: {store.vendor.category}</h2>
      <h2>Description: {store.vendor.description}</h2>
      <button onClick={()=>setAddMerchForm(!addMerchForm)}>Add Merchandise</button>
      {addMerchForm?<form className="merch_form" onSubmit={handleSubmit}>
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
      <div className="merchContainer">
      {store.vendor.merchandises.map((item)=> <Merchandise key={item.id} id={item.id} item={item} setUpdate={setUpdate} update={update} setRefresh={setRefresh} refresh={refresh}/>)}
      </div>
      </>: 
      
      <h2>Add a store</h2>}
      
       
      </div>
    );
  }
  
  export default Yourstore;