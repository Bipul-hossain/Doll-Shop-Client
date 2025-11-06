import React, { useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios";
import useAuth from "../../../hooks/useAuth";
import { SquarePen, Trash2 } from "lucide-react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyProduct = () => {
  const axiosSecure = useAxios();
  const [myProduct, setMyProduct] = useState([]);
  const { loginUserInfo } = useAuth();
  console.log(myProduct);
  // delete handle
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/api/product/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaingProduct = myProduct.filter((pd) => id !== pd._id);
              setMyProduct(remaingProduct);
            }
          })
          .catch((error) => console.log(error));
      }
    });
  };

  useEffect(() => {
    axiosSecure
      .get(`/api/product/myproduct/${loginUserInfo.email}`)
      .then((data) => setMyProduct(data.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <ul className="list bg-base-100 rounded-box shadow-md">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
          My All Products
        </li>
        {myProduct.map((product) => (
          <li key={product._id} className="list-row">
            <div>
              <img className="size-10 rounded-box" src={product.productImg} />
            </div>
            <div>
              <div>{product.productName}</div>
              <div className="text-xs uppercase font-semibold opacity-60">
                ${product.price}
              </div>
            </div>
            <Link
              to={`/dashboard/product/edit/${product._id}`}
              data-tip="Edit"
              className="btn btn-square btn-ghost tooltip tooltip-bottom">
              <SquarePen />
            </Link>
            <button
              onClick={() => handleDelete(product._id)}
              data-tip="Delete"
              className="btn btn-square btn-ghost tooltip tooltip-bottom">
              <Trash2 />
            </button>
            <button className="btn btn-square btn-ghost">
              <svg
                className="size-[1.2em]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </g>
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyProduct;
