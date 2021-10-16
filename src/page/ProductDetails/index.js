import { useParams } from "react-router";
import { products } from "../../products";
import { useCart } from "../../providers/cart";

const ProductDetails = () => {
  const { id } = useParams();
  const { setCartProducts } = useCart();

  let product = products?.find((p) => p.id === parseInt(id));

  const handleAddToCart = () => {
    console.log(product);
    setCartProducts((state) => [...state, product]);
  };

  return (
    <>
      <h2>{`Product Details ${id}`}</h2>
      <div>
        <h3>{product?.name}</h3>
        <h4>{product?.price}</h4>
        <p>{product?.description}</p>
        <button onClick={handleAddToCart}>Buy</button>
      </div>
    </>
  );
};

export default ProductDetails;
