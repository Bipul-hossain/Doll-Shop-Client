import { useContext } from "react";
import { ProductContext } from "../components/Context/ProductProviderContext";

const useProductData = () => {
  const product = useContext(ProductContext);
  return product;
};

export default useProductData;
