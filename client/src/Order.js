import { useEffect, useState } from "react";
function Order({user}) {
  const [orderList, setOrderList]= useState([])
  useEffect(()=>{
    fetch(`get_orders/${user.id}`)
    .then(resp => resp.json())
    .then(data=>{
      setOrderList(orderList=>[...orderList, data])
    });
  },[]);
    return (
      <div>
       <h2>Order</h2>
       {orderList.map((singleOrder)=> <><div>Order date:{singleOrder.order_date}</div><div>Total amount: {singleOrder.total}</div></>)}
      </div>
    );
  }
  
  export default Order;