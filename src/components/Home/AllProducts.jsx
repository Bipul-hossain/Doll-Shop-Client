import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    const allProduct = () => {
      fetch("http://localhost:5000/api/product")
        .then((res) => res.json())
        .then((data) => setAllProducts(data));
    };
    return () => allProduct();
  }, []);
  return (
    <>
      <div className="flex justify-center my-28">
        <h1 className="font-bold text-3xl">All Product</h1>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-10">
          {allProducts.map((product) => (
            <div key={product._id}>
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

export default AllProducts;
