import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const{title,rating,price,detail,img,_id} = service;
    return (
<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl">{title}</h2>
 {detail.length > 100?
 <p className=''>{detail.slice(0,100)+ '...'}</p>
  :
    <p className=''>{detail}</p>
}    <div className="card-actions flex items-center justify-center gap-2">
  <p className='text-2xl font-semibold'>Price: ${price}</p>  
  <p className='text-2xl font-semibold'>Rating: {rating}</p> 
   <Link to={`/services/${_id}`}>
  
      <button className="btn btn-primary">Buy Now</button>
  </Link>

    </div>
  </div>
</div>
    );
};

export default ServiceCard;


