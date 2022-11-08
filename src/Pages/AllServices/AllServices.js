import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../Home/Services/ServiceCard';


const AllServices = () => {
    //using loader to get api
    const allService = useLoaderData();
    console.log(allService);
    // const{title,rating,price,detail,img,service_id} = service
    return (
        <div>
            <div>
                <h1 className="text-5xl mb-7">Services</h1>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
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