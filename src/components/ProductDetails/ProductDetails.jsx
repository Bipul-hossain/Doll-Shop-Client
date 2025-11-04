import React, { use, useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const data = () =>
      fetch(`http://localhost:5000/api/product/${id}`)
        .then((res) => res.json())
        .then((data) => setProductDetails(data));
    return () => data();
  }, []);
  return (
    <div className="grid grid-cols-2 m-20 gap-24">
      <div>
        <img
          className="rounded-b-full"
          src={productDetails?.productImg}
          alt=""
        />
      </div>
      <div>
        <h1 className="text-7xl font-bold"> {productDetails?.productName}</h1>
        <p className="mt-10 font-bold text-5xl">
          Price: ${" "}
          <span className="text-green-600">{productDetails?.price}</span>
        </p>
        <div className="flex flex-col gap-4 mt-32">
          <Link>
            <button className="btn btn-primary w-[200px]">Buy Now</button>
          </Link>
          <Link>
            <button className="btn btn-secondary w-[200px]">Add To Card</button>
          </Link>
          <Link>
            <button className="btn btn-accent w-[200px]">Like</button>
          </Link>
        </div>
      </div>
      <div className="col-span-2">
        <div className="bg-blue-500 p-5 text-2xl font-bold rounded-b-box">
          <h1>Details Product</h1>
        </div>
        <div>{productDetails?.details}</div>
      </div>
    </div>
  );
};

export default ProductDetails;
