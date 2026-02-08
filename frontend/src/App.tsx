import { useEffect, useState } from "react";
import axios from "axios";
import ListItem from "./components/ItemList";

function App() {
  const [items, setItems] = useState<any[]>([]);
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5000/items")
      .then(res => setItems(res.data));
  }, []);

  const addToCart = (item: any) => {
    setCart([...cart, item]);
    alert(item.name + " added to cart");
  };

  const checkout = async () => {
    try {
      await axios.post("http://localhost:5000/orders", cart);
      alert("Order Created Successfully 🎉");
      setCart([]);
    } catch {
      alert("Order Failed");
    }
  };
  const removeFromCart = async (id: number) => {
  try {
    await axios.delete(`http://localhost:5000/cart/${id}`);

    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart);

    alert("Item deleted");
  } catch (err) {
    alert("Delete failed");
  }
};


  return (
    <div  style={{background:"lightblue", padding:"20px",fontFamily:"Arial, sans-serif"}}>
      <h1 style={{textDecoration:"underline",fontFamily:"Arial, sans-serif",fontSize:"24px"}}>Shopping Cart App</h1>

      <h2 style={{textDecoration:"underline",fontFamily:"Arial, sans-serif"}}>Items</h2>
      <div  className="items-container" style={{ display: "flex" }}>
        {items.map(item => (
          <ListItem key={item.id} item={item} addToCart={addToCart} />
        ))}

      </div>

      <h2 style={{textDecoration:"underline",fontFamily:"Arial, sans-serif"}}>Cart Items: {cart.length}</h2>
      
       {cart.map(item => (
        <div key={item.id} style={{ margin: 5 }}>
          {item.name} - ₹{item.price}

          {/* REMOVE BUTTON */}
          <button 
            onClick={() => removeFromCart(item.id)}
            style={{ marginLeft: 10, background: "red", color: "white" }}
          >
            Remove
          </button>
        </div>
      ))}

      <button onClick={checkout} style={{ padding: 10, background: "green", color: "white" }}>
        Checkout
      </button>
    </div>
  );
}

export default App;
