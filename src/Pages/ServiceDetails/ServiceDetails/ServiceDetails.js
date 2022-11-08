import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    //using loader data
    const {title, img,detail,rating,price,_id} = useLoaderData();

    //review function
    const handleReview = async(event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value
        const email = form.email.value
        const userReview = form.review.value
        const review = {
        service:_id,
        serviceName: title,
            user: name,
            email: email,
            review: userReview,

        } 
        fetch('http://localhost:5000/review',{
           method: 'POST',
           headers: {
            'content-type': 'application/json'
           },
           body: JSON.stringify(review)
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert('successfully added');
                form.reset();
            }
        } )
        .catch(error => console.error(error))
        // console.log(review);
    }
    return (
        <div>
                        <h1 className="text-4xl font-bold text-center mt-3 mb-10">Service Details & Reviews</h1>

           <div className='grid gap-6 grid-cols-1 lg:grid-cols-2'>
            
            <div>
                <h1 className="text-3xl font-semibold mb-4">

                {title}
                </h1>
                <img className='rounded w-full' src={img} alt="" />
                <div className='flex justify-start gap-6 my-3'>

                <h1 className="text-2xl font-semibold">Price: ${price}</h1>
                <h1 className="text-2xl font-semibold">Price: ${rating}</h1>
                </div>
            </div>
            <div>
                <h2 className='text-2xl font-semibold mb-4'>Service Description -</h2>
                <hr />
                <h1 className="text-xl "> {detail}
</h1>

            </div>
            
            
           </div>
           <div>
            <h1 className="text-4xl font-bold my-5 text-center">
                REVIEWS </h1>

                <div>
           <form onSubmit={handleReview}>
            <h2 className="text-3xl  my-6">Add a review</h2>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-6'>

           <input name='name' type="text" placeholder="Your Name" className="input input-ghost w-full input-bordered" />
           
           
           <input name='email' type="text" placeholder="Your Email" className="input input-ghost w-full input-bordered"  />
            </div>
            <textarea name='review' className="textarea textarea-bordered h-24 w-full mb-6" placeholder="Your Reviews"></textarea>
<input className='btn btn-ghost mb-6' type="submit" value="Add your review" />
            </form> 
        </div>
            
           </div>
        </div>
    );
};

export default ServiceDetails;