import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-1 '>
            <div>

           <img src="https://img.freepik.com/free-vector/feeling-sorry-concept-illustration_114360-3950.jpg?w=740&t=st=1668002663~exp=1668003263~hmac=f56df8a6e28fa39ab04299f0cc1ec6f655fa87d191b9d1bc317985fa4bc88a39" alt="" />
            </div>
            <div className='text-center mb-8 h-3/4 my-auto'>
                <h1 className="text-9xl font-bold">404</h1>
                <h3 className="text-3xl font-semibold">Sorry Couldn't found what you are looking for. Wanna go home?</h3>
                <Link to='/'>
                
                <button className='btn btn-outline my-8'>Home</button>
                </Link>
            </div>
        </div>
    );
};

export default Error;