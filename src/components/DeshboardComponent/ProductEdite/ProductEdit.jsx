import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxios from "../../../hooks/useAxios";
import { toast } from "react-toastify";

const ProductEdit = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const [product, setProduct] = useState(null);
  const instanceAxios = useAxios();
  const navigate = useNavigate();
  useEffect(() => {
    axiosPublic
      .get(`/api/product/${id}`)
      .then((data) => setProduct(data.data))
      .catch((error) => console.log(error));
  }, []);
  console.log("Product ID", id);

  const handleProductUpdateForm = (e) => {
    e.preventDefault();
    const productInfo = {
      productName: e.target.product_name.value,
      productImg: e.target.imageURL.value,
      price: e.target.price.value,
      details: e.target.details.value,
    };
    instanceAxios
      .put(`/api/product/${id}`, productInfo)
      .then((data) => {
        toast("SuccessFully Update Product", data.data.productName);
        navigate("/dashboard/product");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div>
      {/* Card Section */}
      <div className="max-w-2xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Card */}
        <div className="bg-white rounded-xl shadow-xs p-4 sm:p-7">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Update Product
            </h2>
            <p className="text-sm text-gray-600">Update Your Product</p>
          </div>

          <form onSubmit={handleProductUpdateForm}>
            {/* Section */}
            <div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200">
              <label
                htmlFor="af-payment-billing-contact"
                className="inline-block text-sm font-medium">
                Product Information
              </label>

              <div className="mt-2 space-y-3">
                <input
                  type="text"
                  defaultValue={product?.productName}
                  name="product_name"
                  className="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Product Name"
                />
                <input
                  type="text"
                  defaultValue={product?.productImg}
                  name="imageURL"
                  className="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Image URL"
                />
                <input
                  type="number"
                  defaultValue={product?.price}
                  name="price"
                  className="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Price"
                />
                <input
                  type="text"
                  name="details"
                  defaultValue={product?.details}
                  className="py-1.5 sm:py-2 px-3 pe-11 block w-full border-gray-200 shadow-2xs sm:text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Product Details"
                />
              </div>
            </div>

            <button
              type="submit"
              className="py-1.5 sm:py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
              Update Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductEdit;
