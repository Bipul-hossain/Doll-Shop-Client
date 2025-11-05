import React, { createContext, useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

export const ProductContext = createContext();

const ProductProviderContext = ({ children }) => {
  const { loginUserInfo } = useAuth();
  const [card, setCard] = useState([]);

  useEffect(() => {
    if (loginUserInfo) {
      fetch(`http://localhost:5000/api/card?email=${loginUserInfo.email}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          setCard(data);
        })
        .catch((error) => console.log(error));
    }
  }, [loginUserInfo]);

  const productData = {
    card,
    setCard,
  };

  return <ProductContext value={productData}>{children}</ProductContext>;
};

export default ProductProviderContext;
