import { useState } from "react";
import { useCart } from "../../providers/cart";

const Cart = () => {
  const { cartProducts } = useCart();

  const [costumer, setCostumer] = useState({
    name: "",
    address: "",
  });

  const handleInput = (event) =>
    setCostumer((state) => ({
      ...state,
      [event.target.id]: event.target.value,
    }));

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(costumer));
  };

  return (
    <>
      <h3>Cart</h3>
      {cartProducts?.map(({ id, name, price }) => (
        <div key={id}>
          <span>{name}</span>
          <span>{price}</span>
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"> Name </label>
          <input
            id="name"
            value={costumer.name}
            onChange={handleInput}
            type="text"
          />
        </div>

        <div>
          <label htmlFor="address"> Address </label>
          <input
            id="address"
            value={costumer.address}
            onChange={handleInput}
            type="text"
          />
        </div>

        <button type="submit">Purchase</button>
      </form>
    </>
  );
};

export default Cart;
