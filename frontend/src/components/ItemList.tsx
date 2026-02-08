
import './index.css'
type Props = {
  item: any;
  addToCart: (item: any) => void;
};

export default function ListItem({ item, addToCart }: Props) {
  return (
    <div className="item-card" style={{ border: "1px solid black", padding: 10, margin: 10 }}>
      <h3>{item.name}</h3>
      <p>Price: ₹{item.price}</p>
      <button style={{ padding: 10, background: "green", color: "white" }} onClick={() => addToCart(item)}>
        Add to Cart
      </button>
       

    </div>
  );
}
