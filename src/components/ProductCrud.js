import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import db from "../firebaseConfig"; // Sesuaikan dengan konfigurasi Firebase Anda
import "../css/crud.css"; // CSS halaman CRUD
import Navbar from "./navbar"; // Import Navbar

const ProductCrud = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ description: "", image: "" });
  const [editProductId, setEditProductId] = useState(null);
  const [editProduct, setEditProduct] = useState({
    description: "",
    image: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isLoggedIn) {
      // Show prompt login when accessing the page
      const login = prompt("Enter username and password :");
      if (login === "admin") {
        setIsLoggedIn(true);
        fetchProducts(); // Fetch products if logged in
      } else {
        setError("Invalid username or password");
      }
    } else {
      fetchProducts(); // Fetch products only if logged in
    }
  }, [isLoggedIn]);

  // Fetch products from Firebase Firestore
  const fetchProducts = async () => {
    const productsCollection = collection(db, "products");
    const productSnapshot = await getDocs(productsCollection);
    const productList = productSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setProducts(productList);
  };

  // Add new product
  const handleAddProduct = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "products"), newProduct);
    setNewProduct({ description: "", image: "" });
    fetchProducts(); // Refresh product list
  };

  // Delete product
  const handleDeleteProduct = async (id) => {
    await deleteDoc(doc(db, "products", id));
    fetchProducts(); // Refresh product list
  };

  // Edit product
  const handleEditProduct = (product) => {
    setEditProductId(product.id);
    setEditProduct({ description: product.description, image: product.image });
  };

  // Update product
  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    const productDoc = doc(db, "products", editProductId);
    await updateDoc(productDoc, editProduct);
    setEditProductId(null);
    setEditProduct({ description: "", image: "" });
    fetchProducts(); // Refresh product list
  };

  return (
    <div>
      <div className="crud-container">
        {isLoggedIn ? (
          <>
            <h2>Product Management</h2>

            {/* Form to Add New Product */}
            <form onSubmit={handleAddProduct} className="crud-form">
              <input
                type="text"
                placeholder="Product Description"
                value={newProduct.description}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, description: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Product Image URL"
                value={newProduct.image}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, image: e.target.value })
                }
                required
              />
              <button type="submit">Add Product</button>
            </form>

            {/* Product List */}
            <div className="product-list">
              {products.map((product) => (
                <div key={product.id} className="product-item">
                  {editProductId === product.id ? (
                    // Form to Edit Product
                    <form onSubmit={handleUpdateProduct} className="crud-form">
                      <input
                        type="text"
                        value={editProduct.description}
                        onChange={(e) =>
                          setEditProduct({
                            ...editProduct,
                            description: e.target.value,
                          })
                        }
                        required
                      />
                      <input
                        type="text"
                        value={editProduct.image}
                        onChange={(e) =>
                          setEditProduct({
                            ...editProduct,
                            image: e.target.value,
                          })
                        }
                        required
                      />
                      <button type="submit">Update Product</button>
                      <button onClick={() => setEditProductId(null)}>
                        Cancel
                      </button>
                    </form>
                  ) : (
                    <div className="product-details">
                      <img src={product.image} alt={product.description} />
                      <p>{product.description}</p>
                      <div className="action-buttons">
                        <button
                          className="edit-button"
                          onClick={() => handleEditProduct(product)}
                        >
                          Edit
                        </button>
                        <button
                          className="delete-button"
                          onClick={() => handleDeleteProduct(product.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="login-error">
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCrud;
