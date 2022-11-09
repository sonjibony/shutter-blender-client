import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/limitedServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="w-11/12 mx-auto">
      <div className="text-start">
        <p
          className="  text-2xl font-bold mb-2 mt-10"
          style={{ color: "#84A9CD" }}
        >
          SERVICE
        </p>
        <h1 className="text-5xl font-bold mb-3">My Services</h1>
        <h1 className="text-xl mb-6">
          Here is some services that I provide. Choose the service that meets
          your need. <br /> Don't worry about the quality. See reviews and feel
          free to add one.
        </h1>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
        {services.map((service) => (
          <ServiceCard key={service.service_id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="flex justify-center">
        <Link to="/services">
          <button
            className="btn btn-success text-white font-bold border-0  my-6 "
            // style={{ backgroundColor: "#84A9CD" }}
          >
            See All Services
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
