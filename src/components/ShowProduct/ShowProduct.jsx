import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleProduct from "../SingleProduct/SingleProduct";
import { useForm } from "react-hook-form";

const ShowProduct = () => {
 
    
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setProduct(data);
      });
  }, []);

  //limit
  fetch("https://fakestoreapi.com/products?limit=5")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      setProduct(data);
    });

  const handleSearch = () => {};

  return (
    <div className="container">
      <h2 className="text-center">Product List</h2>
      <div className="text-center">
        {" "}
        <input
          className=" text-center"
          type="text"
          placeholder="Search here"
          onChange={handleSearch}
        />
      </div>
      <h1>All Products</h1>
      <div className="d-flex gap-4">
        <div className="col-md-7 cols-sm-12">
          {product.map((single_product) => (
            <SingleProduct single_product={single_product}></SingleProduct>
          ))}
        </div>

        <div className="col-md-5 col-sm-12">
          <h2>Add New Product</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Product Name"/>
            <input type="text"  Description/>
            <input type="text" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShowProduct;
