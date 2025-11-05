import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const PopularProducts = () => {
  const [popularProduct, setPopularProduct] = useState([]);
  useEffect(() => {
    const popularProduct = () => {
      fetch("http://localhost:5000/api/product/popular")
        .then((res) => res.json())
        .then((data) => setPopularProduct(data));
    };
    return () => popularProduct();
  }, []);
  return (
    <>
      <div className="flex justify-center my-28">
        <h1 className="font-bold text-3xl">Popular Product</h1>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-10">
          {popularProduct.map((product, index) => (
            <div key={index}>
              <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                  <img src={product.productImg} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{product.productName}</h2>
                  <p>{product.details}</p>
                  <p className="text-sm font-bold">Price: {product.price}</p>
                  <div className="card-actions justify-end">
                    <Link to={`/product/details/${product._id}`}>
                      <button className="btn btn-primary">Details View</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularProducts;
