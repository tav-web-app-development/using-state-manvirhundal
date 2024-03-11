import { useState } from "react";
export default function ProductCard({ product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [showDescription, setShowDescription] = useState(false);
  

  const handleNextButtonClick = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === product.imageUrls.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousButtonClick = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === 0 ? product.imageUrls.length - 1 : prevIndex - 1
    );
  };

  const toggleDescription = () => {
    setShowDescription(prevState => !prevState);
  };

  const handleAddToCartClick = () => {
    setProductCount(prevCount => prevCount + 1);
    alert(`You have ${productCount + 1} items added to your cart`);
  };

  return (
    <>
      <div id="image-carousel">
        <img
          src={product.imageUrls[currentImageIndex] + " " + product.name}
          alt={product.name}
        />
        <button onClick={handleNextButtonClick} disabled={product.imageUrls.length <= 1}>Next</button>
        <button onClick={handlePreviousButtonClick} disabled={product.imageUrls.length <= 1}>Previous</button>
      </div>

      <h3>{product.name}</h3>
      {showDescription && <p>{product.description}</p>}
      <button onClick={toggleDescription}>
        {showDescription ? "Hide Description" : "Show Description"}</button>
      <div className="price">${product.price}</div>

      <button onClick={handleAddToCartClick}>Add to Cart</button>

      {!product.isInStock && "The product is out of stock"}
    </>
  );
}
