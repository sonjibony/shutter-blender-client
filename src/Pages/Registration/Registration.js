import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import auth from "../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";
const Registration = () => {
  useTitle("Registration");
  const [error, setError] = useState("");
  //using context
  const { createUser, updateUserProfile, onSetUser } = useContext(AuthContext);

  const navigate = useNavigate();

  //implementing registration
  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        navigate("/");
        const profile = {
          displayName: name,
          photoURL: photoURL,
        };
        updateUserProfile(profile)
          .then((e) => {
            onSetUser(auth?.currentUser || {});
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  return (
    <div className="hero my-7">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2">
          <img
            src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=740&t=st=1668070796~exp=1668071396~hmac=545e91f6fa5f1bc3e2507873cac940afaef3370ccb7528b25523cfd3a75c66f6"
            alt=""
          />
        </div>

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center pt-7">Register Now</h1>

          <form onSubmit={handleRegistration} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <p className="text-lg">
                  Already have an account?
                  <Link
                    to="/login"
                    className=" text-lg label-text-alt link link-hover text-blue-500"
                  >
                    {" "}
                    Login
                  </Link>
                </p>
              </label>
              <h2 className="text-red-500"> {error}</h2>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary mb-5">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
