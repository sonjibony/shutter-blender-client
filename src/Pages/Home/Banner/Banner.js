import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="carousel w-full rounded">
      <div id="slide1" className="carousel-item relative w-full ">
        <div className="w-full img-overlay">
          <img
            src="https://images.pexels.com/photos/6084/camera-technology-lens-canon.jpg?cs=srgb&dl=pexels-kaboompics-com-6084.jpg&fm=jpg&h=500&w=1100&fit=crop&_gl=1*418pve*_ga*NDAwNTIyNDM1LjE2NTg5OTQ3NzI.*_ga_8JE65Q40S6*MTY2Nzg0MjYzMy4xNS4xLjE2Njc4NDQ3MzYuMC4wLjA."
            alt=""
            className="w-full"
          />
        </div>
        <div className="absolute  transform -translate-y-1/2 left-24  top-1/3">
          <h1 className="sm:text-xl lg:text-3xl font-semibold lg:mb-2 text-white ">
            WELCOME TO
          </h1>
          <h1 className="sm:text-4xl lg:text-6xl font-bold lg:mb-4 text-green-300">
            Shutter Blender
          </h1>
          <h1 className="lg:text-2xl lg:mb-8 text-white">
            Book service for your special and extraordinary moments.
          </h1>
          <button className="btn btn-outline btn-success btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-2">
            services
          </button>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide3"
            className="btn btn-outline btn-success btn-circle mr-5"
          >
            ❮
          </a>
          <a href="#slide2" className="btn btn-success btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full ">
        <div className="w-full img-overlay">
          <img
            src="https://images.pexels.com/photos/3773478/pexels-photo-3773478.jpeg?cs=srgb&dl=pexels-israelzin-oliveira-3773478.jpg&fm=jpg&h=500&w=1100&fit=crop&_gl=1*d25rkn*_ga*NDAwNTIyNDM1LjE2NTg5OTQ3NzI.*_ga_8JE65Q40S6*MTY2Nzg0MjYzMy4xNS4xLjE2Njc4NDQ2MzAuMC4wLjA.
"
            alt=""
            className="w-full"
          />
        </div>
        <div className="absolute  transform -translate-y-1/2 left-24  top-1/3">
          <h1 className="sm:text-xl lg:text-3xl font-semibold lg:mb-2 text-white ">
            WELCOME TO
          </h1>
          <h1 className="sm:text-4xl lg:text-6xl font-bold lg:mb-4 text-green-300">
            Shutter Blender
          </h1>
          <h1 className="lg:text-2xl lg:mb-8 text-white">
            Book service for your special and extraordinary moments.
          </h1>
          <button className="btn btn-outline btn-success btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-2">
            services
          </button>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide1"
            className="btn btn-outline btn-success btn-circle mr-5"
          >
            ❮
          </a>
          <a href="#slide3" className="btn btn-success btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full ">
        <div className="w-full img-overlay">
          <img
            src="https://images.pexels.com/photos/212372/pexels-photo-212372.jpeg?cs=srgb&dl=pexels-photomix-company-212372.jpg&fm=jpg&h=500&w=1100&fit=crop&_gl=1*dqonn2*_ga*NDAwNTIyNDM1LjE2NTg5OTQ3NzI.*_ga_8JE65Q40S6*MTY2Nzg0MjYzMy4xNS4xLjE2Njc4NDM4MTYuMC4wLjA."
            alt=""
            className="w-full"
          />
        </div>
        <div className="absolute  transform -translate-y-1/2 left-24  top-1/3">
          <h1 className="sm:text-xl lg:text-3xl font-semibold lg:mb-2 text-white ">
            WELCOME TO
          </h1>
          <h1 className="sm:text-4xl lg:text-6xl font-bold lg:mb-4 text-green-300">
            Shutter Blender
          </h1>
          <h1 className="lg:text-2xl lg:mb-8 text-white">
            Book service for your special and extraordinary moments.
          </h1>
          <button className="btn btn-outline btn-success btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-2">
            services
          </button>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide2"
            className="btn btn-outline btn-success btn-circle mr-5"
          >
            ❮
          </a>
          <a href="#slide1" className="btn  btn-success btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
