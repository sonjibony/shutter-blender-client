import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewCard from './ReviewCard';

const MyReviews = () => {
   const {user} =useContext(AuthContext);
   const [reviews, setReviews] = useState([]);
console.log(reviews);
   useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
    .then(res => res.json())
    .then(data => setReviews(data))
   },[user?.email])


    return (
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
        ></ReviewCard>)
      }
    
      
    </tbody>
    

    
  </table>
</div>
        </div>
    );
};

export default MyReviews;