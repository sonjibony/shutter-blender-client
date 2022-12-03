import React from "react";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="my-7 w-11/12 mx-auto">
      <div>
        <h1 className="text-5xl mb-4">THE BLOG</h1>
        <h1 className="text-xl mb-7">
        Stay informed with the latest news, gear and technology on the Outdoor Photographer blog, featuring guest posts from pro photographers and spotlighting images from the <span className="text-green-500">Shutter Blender</span> community.        </h1>
      </div>
      <div className="card lg:card-side bg-base-100  rounded-none">
        <figure>
          <img
            src="https://images.pexels.com/photos/11388549/pexels-photo-11388549.jpeg?cs=srgb&dl=pexels-stshering-11388549.jpg&fm=jpg&h=400&w=550&fit=crop&_gl=1*16pods*_ga*NDAwNTIyNDM1LjE2NTg5OTQ3NzI.*_ga_8JE65Q40S6*MTY3MDA1MDAxOC4yNi4xLjE2NzAwNTAxMDguMC4wLjA."
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Finding Inspiration In Our National Parks Assignment Winner Denis
            Dessoliers
          </h2>
          <p className="text-sm text-gray-500">December 1, 2022 | By Staff</p>
          <p>
            Congratulations to Denis Dessoliers for winning the recent Finding
            Inspiration In Our National Parks Assignment with the image, “Zion
            Wonderland.”...
          </p>

          <div className="card-actions justify-end">
            <button className="btn btn-outline btn-success btn-sm rounded">
              Read More
            </button>{" "}
          </div>
        </div>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 mt-11">
        <div className="card card-compact w-96 bg-base-100 rounded-none">
          <figure>
            <img
              src="https://images.pexels.com/photos/797797/pexels-photo-797797.jpeg?cs=srgb&dl=pexels-vasanth-babu-797797.jpg&fm=jpg&h=400&w=550&fit=crop&_gl=1*1wm1wu2*_ga*NDAwNTIyNDM1LjE2NTg5OTQ3NzI.*_ga_8JE65Q40S6*MTY3MDA1MjI2NC4yNy4xLjE2NzAwNTI0MzguMC4wLjA."
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Photo Of The Day By Rom Savage</h2>
            <p className="text-sm text-gray-500">December 1, 2022 | By Staff</p>
            <p>
              Today’s Photo of the Day is “Enchanting Transformation” by Rom
              Savage. Location: Roxborough, Colorado. “Sometimes when nature is
              feeling generous,...
            </p>
            <div className="card-actions justify-start mt-3 ">
              <button className="btn btn-outline btn-success btn-sm rounded">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 rounded-none">
          <figure>
            <img
              src="https://images.pexels.com/photos/2258536/pexels-photo-2258536.jpeg?cs=srgb&dl=pexels-frank-cone-2258536.jpg&fm=jpg&h=400&w=550&fit=crop&_gl=1*6rr9q0*_ga*NDAwNTIyNDM1LjE2NTg5OTQ3NzI.*_ga_8JE65Q40S6*MTY3MDA1MjI2NC4yNy4xLjE2NzAwNTI5NDIuMC4wLjA."
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Behind The Shot: Earth’s Shadow At Thunder
            </h2>
            <p className="text-sm text-gray-500">
              November 23, 2022 | By Staff
            </p>
            <p>
              This photograph was 23 years in the making. It was inspired by a
              powerful series of photographs that archetypal mountain
              photographer Galen Rowell made from the summit of a minor peak in
              Nepal’s Everest region and published...
            </p>
            <div className="card-actions justify-start mt-3 ">
              <button className="btn btn-outline btn-success btn-sm rounded">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 rounded-none">
          <figure>
            <img
              src="https://images.pexels.com/photos/385976/pexels-photo-385976.jpeg?cs=srgb&dl=pexels-nubia-navarro-%28nubikini%29-385976.jpg&fm=jpg&h=400&w=550&fit=crop&_gl=1*1raeuyj*_ga*NDAwNTIyNDM1LjE2NTg5OTQ3NzI.*_ga_8JE65Q40S6*MTY3MDA1MjI2NC4yNy4xLjE2NzAwNTMxODcuMC4wLjA."
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              High-Flying Photo Ops Assignment Winner Johnny Fermanides
            </h2>
            <p className="text-sm text-gray-500">October 14, 2022 | By Staff</p>
            <p>
              Congratulations to Johnny Fermanides for winning the recent
              High-Flying Photo Ops Assignment with the image, “Shadowland.”
              View the winning image...
            </p>
            <div className="card-actions justify-start mt-3 ">
              <button className="btn btn-outline btn-success btn-sm rounded">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
