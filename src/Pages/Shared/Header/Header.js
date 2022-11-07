import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

//menu list items
const menuItems = <>
<li><Link to='/'>Home</Link></li>
<li><Link to='/blog'>Blog</Link></li>
</>

    return (
<div className="navbar   py-5">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItems}
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl">
      <img  style={{height:"50px"}} src="https://cdn-icons-png.flaticon.com/512/1645/1645360.png" alt="" />  
    </Link>
    <Link to='/' className="btn btn-ghost normal-case text-xl">Shutter Blender</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      {menuItems}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Get started</a>
  </div>
</div>
    );
};

export default Header;