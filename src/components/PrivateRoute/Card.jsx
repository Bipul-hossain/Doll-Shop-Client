import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { MdOutlineDeleteForever } from "react-icons/md";
import useAxios from "../../hooks/useAxios";
import useProductData from "../../hooks/useProductData";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Card = () => {
  const { loginUserInfo } = useAuth();
  const useAxiosSecure = useAxios();
  const { card, setCard } = useProductData();

  // useEffect(() => {
  //   fetch(`http://localhost:5000/api/card?email=${loginUserInfo.email}`, {
  //     method: "GET",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCard(data);
  //     })
  //     .catch((error) => console.log(error));
  // }, [loginUserInfo]);
  const handleDeleteCard = (id) => {
    console.log("Delete id", id);

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
        useAxiosSecure
          .delete(`/api/card/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaingCard = card.filter((pd) => id !== pd.productId);
              setCard(remaingCard);
            }
          })
          .catch((error) => console.log(error));
      }
    });
  };

  return (
    <div>
      <h1>List of Card Data</h1>
      <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
        Most played songs this week
      </li>
      <ul className="list bg-base-100 rounded-box shadow-md">
        {card.map((cd, index) => (
          <div key={index}>
            <li className="list-row">
              <div className="text-4xl font-thin opacity-30 tabular-nums">
                0{index + 1}
              </div>
              <div>
                <img
                  className="size-10 rounded-box"
                  src={cd.productDetails.productImg}
                />
              </div>
              <div className="list-col-grow">
                <div>{cd.productDetails.productName}</div>
                <div className="text-xs uppercase font-semibold opacity-60">
                  Price: $ {cd.productDetails.price}
                </div>
              </div>
              <div className="list-col-grow">
                <div>{cd.productDetails.productName}</div>
                <div className="text-xs uppercase font-semibold opacity-60">
                  Quantity: {cd.quantity}
                </div>
              </div>
              <button
                onClick={() => handleDeleteCard(cd.productId)}
                className="btn btn-square btn-ghost">
                <MdOutlineDeleteForever className="text-4xl" />
              </button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Card;
