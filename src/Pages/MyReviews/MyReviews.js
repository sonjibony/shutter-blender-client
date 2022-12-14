import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";
import ReviewCard from "./ReviewCard";
import Swal from "sweetalert2";

const MyReviews = () => {
  useTitle("My Reviews");
  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://shutter-blender-server.vercel.app/reviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("shutter-token")|| user?.accessToken}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })

      .then((data) => {
        setReviews(data);
      });
  }, [user, logOut]);

  //handle delete
  const handleDelete = (id) => {
    const proceed = window.confirm("Do you want to delete this review?");

    if (proceed) {
      fetch(`https://shutter-blender-server.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire("Done!", "Successfully Deleted!", "success");
            const remaining = reviews.filter((odr) => odr._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  return (
    <div>
      {reviews.length > 0 ? (
        <div className="w-11/12 mx-auto mb-10 ">
          <h2 className="text-5xl mt-5 mb-10">
            You Have Added {reviews.length} reviews.
          </h2>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Review</th>
                  <th>Operations</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {reviews?.map((review) => (
                  <ReviewCard
                    key={review._id}
                    reviews={review}
                    handleDelete={handleDelete}
                  ></ReviewCard>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <h1 className="text-3xl font-bold mt-40 mb-48 text-center">
          No Reviews Were Added By you
        </h1>
      )}
    </div>
  );
};

export default MyReviews;
