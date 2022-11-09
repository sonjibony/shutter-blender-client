import React from 'react';

const Achievement = () => {
    return (
        <div className='flex flex-wrap justify-center gap-6 my-9'>
            <div className=' md:px-2 w-20 md:w-32  lg:w-52 py-2 border-r-4 border-black text-center'>
              <h1 className=' text-xl sm:text-2xl md:text-4xl lg:text-7xl mb-3 font-bold text-green-400'
              //  style={{color:"#84A9CD"}}
               >200+</h1>  
              <p className=' md:text-xl lg:text-2xl'>Projects Done</p>
            </div>
            <div className=' w-20 md:w-32  lg:w-52 md:px-2 py-2 border-r-4 border-black text-center'>
              <h1 className=' text-xl sm:text-2xl md:text-4xl lg:text-7xl mb-3 font-bold text-green-400' 
              // style={{color:"#84A9CD"}}
              >100+</h1>  
              <p className=' md:text-xl lg:text-2xl'>Happy Clients</p>
            </div>
            <div className='text-start md:px-2 w-20 md:w-32  lg:w-52 py-2 border-r-4 border-black lg:text-center '>
              <h1 className=' text-xl sm:text-2xl md:text-4xl lg:text-7xl mb-3 font-bold text-green-400'
              //  style={{color:"#84A9CD"}}
               >15</h1>  
              <p className=' md:text-xl lg:text-2xl'>Exhibition</p>
            </div>
            <div className=' md:px-2 w-20 md:w-32 lg:w-52 py-2 border-r-4 border-black text-center'>
              <h1 className=' text-xl sm:text-2xl md:text-4xl lg:text-7xl mb-3 text-green-400 font-bold'
              //  style={{color:"#84A9CD"}}
               >7</h1>  
              <p className=' md:text-xl lg:text-2xl'>Years of Work</p>
            </div>

            
        </div>
    );
};

export default Achievement;