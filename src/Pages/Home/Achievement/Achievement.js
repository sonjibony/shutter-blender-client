import React from 'react';

const Achievement = () => {
    return (
        <div className='flex flex-wrap justify-center gap-6 my-9'>
            <div className=' px-2 w-52 py-2 border-r-4 border-black text-center'>
              <h1 className='text-7xl mb-3 font-bold'>200+</h1>  
              <p className='text-2xl'>Projects Done</p>
            </div>
            <div className=' w-52 px-2 py-2 border-r-4 border-black text-center'>
              <h1 className='text-7xl mb-3 font-bold'>100+</h1>  
              <p className='text-2xl'>Happy Clients</p>
            </div>
            <div className='px-2  w-52 py-2 border-r-4 border-black text-center'>
              <h1 className='text-7xl mb-3 font-bold'>15</h1>  
              <p className='text-2xl'>Professional</p>
            </div>
            <div className=' px-2 w-52 py-2 border-r-4 border-black text-center'>
              <h1 className='text-7xl mb-3 font-bold'>7</h1>  
              <p className='text-2xl'>Years of experience</p>
            </div>

            
        </div>
    );
};

export default Achievement;