import { Link } from "react-router-dom";

const PRODUCTS = [
  {
    id: 1,
    title: "Apple",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, amet quidem mollitia soluta nam tempora, at nostrum ullam perspiciatis id sed nihil voluptatem officia quod nisi voluptas. Possimus, vero id.",
  },
  {
    id: 2,
    title: "Lemon",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, amet quidem mollitia soluta nam tempora, at nostrum ullam perspiciatis id sed nihil voluptatem officia quod nisi voluptas. Possimus, vero id.",
  },
  {
    id: 3,
    title: "Banana",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, amet quidem mollitia soluta nam tempora, at nostrum ullam perspiciatis id sed nihil voluptatem officia quod nisi voluptas. Possimus, vero id.",
  },
];

const Products = () => {
  return (
    <>
      {PRODUCTS.map((product) => (
        <Link to={`/products/${product.title}`}>
          <div key={product.id} className="pro-card">
            <p>{product.title}</p>
            <p>{product.description}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Products;
