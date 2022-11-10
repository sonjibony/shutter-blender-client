import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import axios from "axios";
import useTitle from "../../hooks/useTitle";
const Update = () => {
  useTitle("Edit Review");
  const { user } = useContext(AuthContext);
  const { review, ...test } = useLoaderData();

  const navigation = useNavigate();

  function update(event) {
    event.preventDefault();
    const form = event.target;
    const review = form.review.value;
    console.log(test._id);
    if (test._id) {
      axios
        .put(`http://localhost:5000/reviews/${test._id}`, { review })
        .then((res) => {
          navigation(-1);
        });
    } else {
      console.log("invalid");
    }
  }
  return (
    <div className="w-11/12 mx-auto">
      <form onSubmit={update}>
        <h2 className="text-3xl font-bold text-green-400 my-6">
          Update Your Review.
        </h2>

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
            className="input input-ghost w-full input-bordered"
            defaultValue={user?.email}
            readOnly
          />
        </div>
        <textarea
          name="review"
          className="textarea textarea-bordered h-24 w-full mb-6"
          placeholder="Your Reviews"
          defaultValue={review}
        ></textarea>

        <input
          className="btn btn-outline font-extrabold btn-success mb-6"
          type="submit"
          value="Update Review"
        />
      </form>
    </div>
  );
};

export default Update;
