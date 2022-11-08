import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
  const  [services, setServices] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/limitedServices')
    .then(res => res.json())
    .then(data => setServices(data))
  },[])
    return (
        <div>
            <div className='text-start'> 
<p className="text-2xl font-bold mb-4 mt-10">SERVICE</p>
<h1 className="text-5xl font- mb-3">My Services</h1>
            <h1 className="text-xl mb-6">Choose the service that meets your need</h1>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
        
                {
services.map(service => <ServiceCard
key={service.service_id}
service={service}
></ServiceCard>)
                }
            </div>
            <div className='flex justify-center'>
<Link to='/services'>
            <button className='btn btn-accent my-6 '>See All Services</button>
            </Link>
            </div>
        </div>
    );
};

export default Services;