import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoader] = useState(true);

  useEffect(() => {
    fetch("https://shutter-blender-server.vercel.app/services?limit=3")
      .then((res) => res.json())

      .then((data) => {
        setServices(data);
        setLoader(false);
      });
  }, []);
  //spinner
  if (loading) {
    return (
      <div className="flex justify-center">
        <button className="btn text-5xl bg-white text-black loading my-40"></button>
      </div>
    );
  }
  return (
    <>
      <div className=" flex flex-col justify-center items-center">
        <div className="text-center">
          <p className="  text-2xl font-bold  mt-10 text-green-300">SERVICE</p>
          <h1 className="text-5xl font-bold mb-4">My Services</h1>
          <h1 className="text-xl mb-8">
            Here is some services that I provide. Choose the service that meets
            your need. <br /> Don't worry about the quality. See reviews and
            feel free to add one.
          </h1>
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
          {services?.map((service) => (
            <ServiceCard
              key={service.service_id}
              service={service}
            ></ServiceCard>
          ))}
        </div>
      </div>
      <div className="flex justify-end mr-8">
        <Link to="/services">
          <button className="btn btn-outline border-2 btn-success text-white font-bold  mt-6 mb-9">
            See All Services
          </button>
        </Link>
      </div>
    </>
  );
};

export default Services;
