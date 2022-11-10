import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const AddServices = () => {
  useTitle("Add Services");
  const { user } = useContext(AuthContext);

  const onAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const title = form.title.value;
    const price = form.price.value;
    const img = form.img.value;
    const service_id = form.id.value;
    const rating = form.rating.value;
    const detail = form.detail.value;
    console.log(name, email, title, price, img, rating, detail);

    const service = {
      service_id,
      title,
      img,
      price,
      rating,
      detail,
      email,
    };

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("shutter-token")}`,
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire("Done!", "Successfully Added!", "success");
          form.reset();
        }
        console.log(data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="w-3/4 mx-auto">
        <form onSubmit={onAddService}>
          <h2 className="text-3xl  my-6 text-center font-bold text-green-400">
            ADD A SERVICE
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
              defaultValue={user?.email}
              className="input input-ghost w-full input-bordered"
              readOnly
            />

            <input
              name="title"
              type="text"
              placeholder="Service Title"
              className="input input-ghost w-full input-bordered"
              required
            />

            <input
              name="img"
              type="text"
              placeholder="Photo URL"
              className="input input-ghost w-full input-bordered"
              required
            />

            <input
              name="rating"
              type="text"
              placeholder="Rating"
              className="input input-ghost w-full input-bordered"
              required
            />

            <input
              name="price"
              type="text"
              placeholder="Price"
              className="input input-ghost w-full input-bordered"
              required
            />

            <input
              name="id"
              type="text"
              placeholder="Service ID"
              className="input input-ghost w-full input-bordered"
              required
            />
          </div>
          <textarea
            name="detail"
            className="textarea textarea-bordered h-24 w-full mb-6"
            placeholder="Service Description"
            required
          ></textarea>
          <input
            className="btn btn-outline btn-success mb-6"
            type="submit"
            value="Add Your Service"
          />
          <Link to="/">
            <button className="btn btn-outline btn-success ml-5">
              Go Back
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default AddServices;
