function Subscription({user}) {
    const singlesubscription = user.vendors.map((vendor)=> vendor.store_name)
    return (
      <div>
       <h2>Your subscription</h2>
       <h3>list of your subscribed store</h3>
       <h3>{singlesubscription}</h3>
      </div>
    );
  }
  
  export default Subscription;