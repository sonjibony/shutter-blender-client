import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import ServiceCard from '../Home/Services/ServiceCard';


const AllServices = () => {
    useTitle('Services');
    //using loader to get api
    const allService = useLoaderData();
    // console.log(allService);
    // const{title,rating,price,detail,img,service_id} = service
    return (
        <div>
            <div className="text-start">
        <p
          className="  text-2xl font-bold mb-2 mt-10"
          style={{ color: "#84A9CD" }}
        >
          SERVICE
        </p>
        <h1 className="text-5xl font-bold mb-3">My Services</h1>
        <h1 className="text-xl mb-6">
          Here is some services that I provide. <br /> Choose the service that meets
          your need. <br /> Don't worry about the quality. See reviews and feel
          free to add one.
        </h1>
      </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-7 '>
                {
                    allService.map(service =><ServiceCard
                     key={service._id}
                     service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default AllServices;