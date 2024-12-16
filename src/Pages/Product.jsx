import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton';
import { NavLink, useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null); // Initialize as null
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);

  // Fetch product data
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error('Failed to fetch product:', error);
      }
      setLoading(false);
    };

    getProduct();
  }, [id]); // Include `id` in dependency array

  // Load cart data from localStorage when the app loads
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart data to localStorage whenever the cart state changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      localStorage.removeItem('cart');
    }
  }, [cart]);

  // Add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      console.log('Previous cart:', prevCart);
      const productExists = prevCart.find((item) => item.id === product.id);
      if (productExists) {
        console.log('Product exists, updating quantity');
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      console.log('Adding new product to cart');
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };
  

  // Loading skeleton
  const Loading = () => (
    <>
      <div className="col-md-6">
        <Skeleton height={400} />
      </div>
      <div className="col-md-6" style={{ lineHeight: 2 }}>
        <Skeleton height={50} width={300} />
        <Skeleton height={75} />
        <Skeleton height={25} width={300} />
        <Skeleton height={50} />
        <Skeleton height={150} />
        <Skeleton height={50} width={100} />
        <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
      </div>
    </>
  );

  // Display product details
  const ShowProduct = () => (
    <>
      <div className="col-md-6 my-5">
        <img src={product.image} alt={product.title} height="440px" width="400px" />
      </div>
      <div className="col-md-6 my-5">
        <h4 className="text-uppercase text-dark">{product.category}</h4>
        <h1 className="display-5">{product.title}</h1>
        <p className="lead fw-bolder">
          Rating {product?.rating?.rate} <FaStar />
        </p>
        <h3 className="display-6 fw-bold my-4">${product.price}</h3>
        <p className="lead">{product.description}</p>
        <button
          className="btn btn-outline-dark px-4 py-2"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
        <NavLink to="/cart">
          <button className="btn btn-dark ms-2 px-3 py-">Go to Cart</button>
        </NavLink>
      </div>
    </>
  );

  return (
    <div>
      <div className="container">
        <div className="row">
          {loading ? <Loading /> : product && <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default Product;
