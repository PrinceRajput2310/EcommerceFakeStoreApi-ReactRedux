import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";

//api=https://fakestoreapi.com/products

const ProductListing = () => {
    const dispatch=useDispatch();
  const product = useSelector((state) => state.allProduct.products);


  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products")
      .catch((err) => console.log(err));

    dispatch( setProducts(response.data))
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(product);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
