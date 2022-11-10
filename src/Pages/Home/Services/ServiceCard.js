import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from 'react-icons/fa';

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServiceCard = ({ service }) => {
  const { title, rating, price, detail, img, _id } = service;
  return (
    <PhotoProvider>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <PhotoView src={img}>
          <img className="rounded" src={img} alt="Shoes" />
        </PhotoView>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{title}</h2>
          {detail.length > 100 ? (
            <p className="">{detail.slice(0, 100) + "..."}</p>
          ) : (
            <p className="">{detail}</p>
          )}{" "}
          <div className="card-actions flex items-center justify-center gap-2">
            <p className="text-2xl font-semibold">Price: ${price}</p>
            <FaStar className="text-2xl text-warning"></FaStar>
            <p className="text-2xl font-semibold"> {rating}</p>
            <Link to={`/services/${_id}`}> 
              <button className="btn btn-outline font-bold btn-success text-lg border-0" 
              // style={{backgroundColor:"#E84545"}}
              // style={{color:"#E84545", backgroundColor:"white", border:"2px solid "}}

              >See Details</button>
            </Link>
          </div>
        </div>
      </div>
    </PhotoProvider>
  );
};

export default ServiceCard;
