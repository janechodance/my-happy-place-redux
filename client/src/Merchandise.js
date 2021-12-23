function Merchandise({item}) {
    return (
      <div>
       <h2>Merch</h2>
       <h2>Item: {item.item_name}</h2>
       <h2>Price: {item.price}</h2>
       <h2>Description: {item.description}</h2>
       <h2>{item.inventory} in stock</h2>
      </div>
    );
  }
  
  export default Merchandise;