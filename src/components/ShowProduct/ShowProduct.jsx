import React, { useEffect, useState } from "react";

const ShowProduct = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }, []);

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
            <div className=" card-group">
              <div className="card text-center">
                <img
                  src={single_product.image}
                  className="card-img-top img-fluid p-5"
                  alt="..."
                  width="200"
                  height="300"
                />

                <div className="d-flex my-4 justify-content-around">
                  <button className="btn   btn-primary ">Edit</button>
                  <button className="btn  btn-warning ">Delete</button>
                </div>
                <h3 className="card-title">{single_product.title} </h3>
                <h5>price: {single_product.price}</h5>
                <h5>{single_product.category}</h5>
              </div>
            </div>
          ))}
        </div>

        <div className="col-md-5 col-sm-12">
          <h2>Add New Product</h2>
        </div>
      </div>
    </div>
  );
};

export default ShowProduct;
