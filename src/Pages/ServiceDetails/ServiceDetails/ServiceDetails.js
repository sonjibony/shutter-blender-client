import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../../hooks/useTitle";
import ReviewRow from "./ReviewRow/ReviewRow";
import { FaStar } from 'react-icons/fa';

const ServiceDetails = () => {
    useTitle('Service Detail')
  //using loader data
  const { title, img, detail, rating, price, _id } = useLoaderData();
  const { user } = useContext(AuthContext);
  function fetchReviews (){
    fetch(`http://localhost:5000/reviews?service=${_id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("successfully added");
        }
        setAllReviews(data);
      })
      .catch((err) => console.log(err));
  }

  //review function
  const handleReview = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const userReview = form.review.value;
    const review = {
      service: _id,
      serviceName: title,
      userName: name,
      email: email,
      review: userReview,
      img: user.photoURL,
    };
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("successfully added");
          fetchReviews();
          form.reset();
        }
      })
      .catch((error) => console.error(error));
    // console.log(review);
  };

  const [allReviews, setAllReviews] = useState([]);

  useEffect(() => {
    fetchReviews();
  }, [_id]);
  console.log(allReviews);

  //  const navigate = useNavigate()
  const location = useLocation();
  // const from = location?.state?.from?.pathname || '/all-services';

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-4xl font-bold text-center mt-3 mb-10">
        Service Details & Reviews
      </h1>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        <div>
          <h1 className="text-3xl font-semibold mb-4">{title}</h1>
          <img className="rounded w-full" src={img} alt="" />
          <div className="flex justify-start gap-6 my-3">
            <h1 className="text-2xl font-semibold">Price: ${price}</h1>
            <div className="flex items-center justify-center gap-2">

            <p className="text-2xl font-semibold">Ratings: {rating}</p>
<FaStar className="text-warning text-2xl"></FaStar>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Service Description -</h2>
          <hr />
          <h1 className="text-xl "> {detail}</h1>
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold my-5 text-center">REVIEWS </h1>

        {/* review message */}
        <div className="w-11/12 mx-auto mb-10 ">
          {allReviews.length > 0 ? (
            <h2 className="text-3xl mt-5 mb-10 text-center">
              {allReviews.length} reviews were added
            </h2>
          ) : (
            <h2 className="text-3xl mt-5 mb-10 text-center">
              No reviews were added
            </h2>
          )}
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
                {allReviews.map((review) => (
                  <ReviewRow key={review._id} reviews={review}></ReviewRow>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* add a review or login */}

        {user?.uid ? (
          <>
            <div>
              <form onSubmit={handleReview}>
                <h2 className="text-3xl  my-6">Add a review</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-6">
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    className="input input-ghost w-full input-bordered"
                    defaultValue={user?.displayName}
                    readOnly
                  />

                  <input
                    name="email"
                    type="text"
                    placeholder="Your Email"
                    defaultValue={user?.email}
                    className="input input-ghost w-full input-bordered"
                    readOnly
                  />
                </div>
                <textarea
                  name="review"
                  className="textarea textarea-bordered h-24 w-full mb-6"
                  placeholder="Your Reviews"
                ></textarea>
                <input
                  className="btn btn-ghost mb-6"
                  type="submit"
                  value="Add your review"
                />
              </form>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-center my-6">
              PLEASE LOGIN TO ADD A REVIEW
            </h1>
            <div className="flex justify-center mb-7">
              <Link to="/login" state={{ from: location }} replace>
                <button className="btn">Log in</button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;
