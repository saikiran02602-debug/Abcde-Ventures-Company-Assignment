import axios from "axios";

export default function Cart() {

  const checkout = async () => {
    await axios.post("http://localhost:5000/orders");
    alert("Order Created Successfully");
  };

  return (
    <div>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
}
