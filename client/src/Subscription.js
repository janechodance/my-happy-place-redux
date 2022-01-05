function Subscription({user}) {
    const singlesubscription = user.vendors.map((vendor)=> <div key={vendor.id}>{vendor.store_name}</div>)
    return (
      <div>
       <h2>{user.name}'s Favorite stores</h2>
       <h3>{singlesubscription}</h3>
      </div>
    );
  }
  
  export default Subscription;