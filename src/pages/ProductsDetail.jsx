import { useNavigate, useParams } from "react-router-dom";

const ProductsDetail = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/products");
  };
  const { title } = useParams();
  return (
    <>
      <div className="pro-bg">
        <h1>Products Details</h1>
        <h1>Product title - {title}</h1>
        <button onClick={navigateHandler}>Go to Products</button>
      </div>
    </>
  );
};

export default ProductsDetail;
