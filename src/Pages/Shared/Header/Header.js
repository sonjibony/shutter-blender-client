import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  //implementing log out
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div className="navbar   py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-xs btn-outline btn-success rounded lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {user?.uid ? (
              <>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/myReviews">My Reviews</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>

                <li>
                  <Link to="/addServices">Add Services</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link to="/">
          <img className="hidden md:block"
            style={{ width: "45px" }}
            src="https://cdn-icons-png.flaticon.com/512/1829/1829130.png"
            alt=""
          />
        </Link>
        <Link to="/" className="btn btn-ghost normal-case text-lg lg:text-xl ">
          Shutter Blender
        </Link>
       
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {user?.uid ? (
            <>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/myReviews">My Reviews</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>

              <li>
                <Link to="/addServices">Add Services</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user?.uid ? (
          <>
            <button onClick={handleLogOut} className="btn btn-ghost">
              Log out
            </button>
            <h1 className="text-lg mr-4">{user?.displayName}</h1>
          </>
        ) : (
          <>
            <Link className="mr-4" to="/login">
              Login
            </Link>
            <Link className="mr-4" to="/register">
              Register
            </Link>
          </>
        )}

        <div className="avatar">
          <div className="w-8 rounded-full">
            {user?.photoURL ? (
              <img src={user?.photoURL} alt="" />
            ) : (
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwJoaqh-Ehrbg2Qf6Nk_XiblTuvyyiOwsc2g&usqp=CAU"
                alt=""
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
