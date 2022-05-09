function Subscription({user}) {
    const cancelSubscription= ()=>{
      fetch('subscriptions/')
    } 
    const singlesubscription = user.vendors.map((vendor)=> <div className="subscription_box" key={vendor.id}><div>{vendor.store_name}</div><button onClick={cancelSubscription}>Unsubscribe</button></div>)
    return (
      <div>
       <h2>{user.name}'s Favorite stores</h2>
       <h3>{singlesubscription}</h3>
      
      </div>
    );
  }
  
  export default Subscription;