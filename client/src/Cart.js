function Cart({cartItems, onAdd, onRemove}) {
  console.log(cartItems)
  const total  = cartItems.reduce((a, c) => a + c.total_price, 0);
  console.log(total)
  function postOrder(order, total){
    console.log(order, total)
  }
    return (
      <div>
       <h2>Your Cart</h2>
       {cartItems.length === 0 && <div>Your cart is empty! Opps!</div>}
       {cartItems.map((item)=> <div key={item.id}>
       <img src={item.merch} height="100px" width="100px" alt='itemPicture'/>
         <div>Item name:{item.item_name}</div>
         <div>Price: {item.price}</div>
         <div>Quantity: {item.qty}</div>
         <div>Total: {item.total_price} </div>

         <button onClick={()=>onAdd(item)}>Add</button>
         <button onClick={()=>onRemove(item)}>Remove</button>
         </div>)}
      <h3>Total cost: {total}</h3>
      <button onClick={()=>postOrder(cartItems, total)}>Check Out</button>
      </div>
    );
  }
  
  export default Cart;