import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewCard from './ReviewCard';

const MyReviews = () => {
  useTitle('My Reviews')
   const {user} =useContext(AuthContext);
   const [reviews, setReviews] = useState([]);

// console.log(reviews);
   useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`,{
      headers: {
        authorization: `Bearer ${localStorage.getItem('shutter-token')}`
      }
    })
    .then(res => res.json())
    .then(data => setReviews(data))
   },[user?.email])


//handle delete
   const handleDelete = id => {
    const proceed = window.confirm('Do you want to delete this review?');

    if(proceed){
        fetch(`http://localhost:5000/reviews/${id}`,{
            method: 'DELETE'
        })

        .then(res => res.json())
            .then(data =>{
    console.log(data);
    if(data.deletedCount >0){
      alert('deleted successfully');
      const remaining = reviews.filter(odr => odr._id !== id)
      setReviews(remaining)
    }
            })
        
    }
        }


    return (
      <div>
      {
reviews.length > 0?
        <div className='w-11/12 mx-auto mb-10 '> 
        <h2 className="text-5xl mt-5 mb-10">You Have Added {reviews.length} reviews.</h2>
        <div className="overflow-x-auto w-full">
  <table className="table w-full">
    
    <thead>
      <tr>
       
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    
      {
        reviews.map(review => <ReviewCard
        key={review._id}
        reviews={review}
        handleDelete={handleDelete}
        ></ReviewCard>)
      }
    
      
    </tbody>
    

    
  </table>
</div>
        </div>
        :
        <h1 className='text-3xl font-bold mt-40 mb-48 text-center'>No Reviews Were Added By you</h1>
      }
      </div>
    );
};

export default MyReviews;