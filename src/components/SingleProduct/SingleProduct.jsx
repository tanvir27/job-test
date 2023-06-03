import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = ({ single_product }) => {

    

  return (
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

        <Link to="/">
          {" "}
          <button className="btn btn-secondary">View details</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleProduct;