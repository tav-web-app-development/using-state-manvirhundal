import ProductCard from "./ProductCard";

export default function ProductCardContainer({ products }) {
  const productsJsx = products.map((product, index) => (
    <ProductCard key={index} product={product} />
  ));
  return (
    <>
    <div>
      <h1>Discover Your Favourite Products</h1>
      {productsJsx}
    </div>
           
    </>
  );
  
}
