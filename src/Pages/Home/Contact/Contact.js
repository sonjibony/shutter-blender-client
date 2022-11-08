import React from 'react';

const Contact = () => {
    return (
<div className="hero h-64 mb-7 rounded" style={{ backgroundImage: `url("https://images.pexels.com/photos/1144176/pexels-photo-1144176.jpeg?cs=srgb&dl=pexels-sindre-str%C3%B8m-1144176.jpg&fm=jpg&h=350&w=1100&fit=crop&_gl=1*9g0d5h*_ga*NDAwNTIyNDM1LjE2NTg5OTQ3NzI.*_ga_8JE65Q40S6*MTY2Nzg1MzAxOC4xNi4xLjE2Njc4NTQ2ODQuMC4wLjA.")` }}>
  <div className="hero-overlay rounded bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl text-start ">Immediately get the the services of your need</h1>
<p className='text-start'>Sonjibony@gmail.com </p>

    <div className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </div>
  
    </div>
  </div>
</div>
    );
};

export default Contact;