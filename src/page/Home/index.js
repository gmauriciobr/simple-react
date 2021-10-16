import { Link } from "react-router-dom";
import ProductAlert from "../../components/ProductAlert";
import { products } from "../../products";

const handleShare = (name) => alert(`O produto ${name} foi compartilhado`);

const handleNotify = () =>
  alert("Você será avisado quando este produto for vendido");

const Home = () => {
  return (
    <>
      <h1>Product List</h1>
      {products.map(({ id, name, description, price }) => (
        <div key={id} style={{ display: "flex", flexDirection: "column" }}>
          <h3>
            <Link to={`products/${id}`}>{name}</Link>
          </h3>

          {description && <p>Descrption: {description}</p>}

          <button onClick={() => handleShare(name)}>Share</button>

          <ProductAlert price={price} handler={handleNotify} />
        </div>
      ))}
    </>
  );
};

export default Home;
