import React, { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import ServiceCard from "../Home/Services/ServiceCard";

const AllServices = () => {
  useTitle("Services");

  const [services, setServices] = useState([]);
  const [loading, setLoader] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())

      .then((data) => {
        setServices(data);
        setLoader(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center">
        <button className="btn text-5xl bg-white text-black loading my-40"></button>
      </div>
    );
  }

  return (
    <div className=" flex flex-col justify-center items-center">
      <div className="text-center">
        <p className=" text-green-400 text-2xl font-bold mb-2 mt-10">SERVICE</p>
        <h1 className="text-5xl font-bold mb-3">My Services</h1>
        <h1 className="text-xl mb-6">
          Here is the services that I provide. Choose the service that meets
          your need. <br /> Don't worry about the quality. See reviews and feel
          free to add one.
        </h1>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-7 ">
        {services?.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
