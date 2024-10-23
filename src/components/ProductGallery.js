import React, { useEffect, useState } from "react";
import db from "../firebaseConfig";
import "../css/productGallery.css";

const ProductGallery = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = await db.collection("products").get();
        const productsData = productsCollection.docs.map((doc) => doc.data());
        console.log("Fetched Products:", productsData);
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="product-gallery">
      <h2>Our Products</h2>
      <div className="products">
        {products.map((product, index) => (
          <div className="product" key={index}>
            <img src={product.image} alt={product.description} />
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
