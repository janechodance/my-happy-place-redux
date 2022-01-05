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
       <h2>Your Orders</h2>
       {console.log(orderList)}
       {orderList[0]!==null? orderList.map((singleOrder)=> <div key={singleOrder.id}><div>Order date:{singleOrder.order_date}</div><div>Total amount: {singleOrder.total}</div></div>):null }
      </div>
    );
  }
  
  export default Order;