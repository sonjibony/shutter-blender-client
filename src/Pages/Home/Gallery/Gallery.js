import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { FaArrowRight } from "react-icons/fa";

const Gallery = () => {
  //gallery section for bonus & have used react-photo-view
  return (
    <PhotoProvider>
      <div className=" w-11/12 lg:w-full mx-auto my-9">
        <div className="my-9">
          <h1 className="text-3xl font-bold mb-2 text-green-400">MY GALLERY</h1>
          <p className="text-2xl">
            Here are some of my favorite work. Which will always be my pride.
          </p>
        </div>
        <div className="carousel carousel-end rounded">
          <div className="carousel-item mr-5">
            <PhotoView src="https://images.pexels.com/photos/1671324/pexels-photo-1671324.jpeg?cs=srgb&dl=pexels-francesco-ungaro-1671324.jpg&fm=jpg&h=350&w=500&fit=crop&_gl=1*1xbz7ge*_ga*NDAwNTIyNDM1LjE2NTg5OTQ3NzI.*_ga_8JE65Q40S6*MTY2Nzg1MzAxOC4xNi4xLjE2Njc4NTMwNTMuMC4wLjA.">
              <img
                src="https://images.pexels.com/photos/1671324/pexels-photo-1671324.jpeg?cs=srgb&dl=pexels-francesco-ungaro-1671324.jpg&fm=jpg&h=350&w=500&fit=crop&_gl=1*1xbz7ge*_ga*NDAwNTIyNDM1LjE2NTg5OTQ3NzI.*_ga_8JE65Q40S6*MTY2Nzg1MzAxOC4xNi4xLjE2Njc4NTMwNTMuMC4wLjA."
                alt="Drink"
              />
            </PhotoView>
          </div>

          <div className="carousel-item mr-5">
            <PhotoView src="https://images.pexels.com/photos/612891/pexels-photo-612891.jpeg?cs=srgb&dl=pexels-lucas-allmann-612891.jpg&fm=jpg&h=350&w=500&fit=crop&_gl=1*qx7y6p*_ga*NDAwNTIyNDM1LjE2NTg5OTQ3NzI.*_ga_8JE65Q40S6*MTY2Nzg1MzAxOC4xNi4xLjE2Njc4NTMxNTEuMC4wLjA.">
              <img
                src="https://images.pexels.com/photos/612891/pexels-photo-612891.jpeg?cs=srgb&dl=pexels-lucas-allmann-612891.jpg&fm=jpg&h=350&w=500&fit=crop&_gl=1*qx7y6p*_ga*NDAwNTIyNDM1LjE2NTg5OTQ3NzI.*_ga_8JE65Q40S6*MTY2Nzg1MzAxOC4xNi4xLjE2Njc4NTMxNTEuMC4wLjA."
                alt="Drink"
              />
            </PhotoView>
          </div>

          <div className="carousel-item mr-5">
            <PhotoView src="https://images.pexels.com/photos/1058498/pexels-photo-1058498.jpeg?cs=srgb&dl=pexels-luna-lovegood-1058498.jpg&fm=jpg&h=350&w=500&fit=crop&_gl=1*i6n4ao*_ga*NDAwNTIyNDM1LjE2NTg5OTQ3NzI.*_ga_8JE65Q40S6*MTY2Nzg1MzAxOC4xNi4xLjE2Njc4NTMyODguMC4wLjA.">
              <img
                src="https://images.pexels.com/photos/1058498/pexels-photo-1058498.jpeg?cs=srgb&dl=pexels-luna-lovegood-1058498.jpg&fm=jpg&h=350&w=500&fit=crop&_gl=1*i6n4ao*_ga*NDAwNTIyNDM1LjE2NTg5OTQ3NzI.*_ga_8JE65Q40S6*MTY2Nzg1MzAxOC4xNi4xLjE2Njc4NTMyODguMC4wLjA."
                alt="Drink"
              />
            </PhotoView>
          </div>

          <div className="carousel-item mr-5">
            <PhotoView src="https://images.pexels.com/photos/1292006/pexels-photo-1292006.jpeg?cs=srgb&dl=pexels-susanne-jutzeler-sujufoto-1292006.jpg&fm=jpg&h=350&w=500&fit=crop&_gl=1*dxcgu*_ga*NDAwNTIyNDM1LjE2NTg5OTQ3NzI.*_ga_8JE65Q40S6*MTY2Nzg1MzAxOC4xNi4xLjE2Njc4NTMzNTguMC4wLjA.">
              <img
                src="https://images.pexels.com/photos/1292006/pexels-photo-1292006.jpeg?cs=srgb&dl=pexels-susanne-jutzeler-sujufoto-1292006.jpg&fm=jpg&h=350&w=500&fit=crop&_gl=1*dxcgu*_ga*NDAwNTIyNDM1LjE2NTg5OTQ3NzI.*_ga_8JE65Q40S6*MTY2Nzg1MzAxOC4xNi4xLjE2Njc4NTMzNTguMC4wLjA."
                alt="Drink"
              />
            </PhotoView>
          </div>

          <div className="carousel-item mr-5">
            <PhotoView src="https://images.pexels.com/photos/813398/pexels-photo-813398.jpeg?cs=srgb&dl=pexels-daniel-spase-813398.jpg&fm=jpg&h=350&w=500&fit=crop&_gl=1*crf19p*_ga*NDAwNTIyNDM1LjE2NTg5OTQ3NzI.*_ga_8JE65Q40S6*MTY2Nzg1MzAxOC4xNi4xLjE2Njc4NTM0MzUuMC4wLjA.">
              <img
                src="https://images.pexels.com/photos/813398/pexels-photo-813398.jpeg?cs=srgb&dl=pexels-daniel-spase-813398.jpg&fm=jpg&h=350&w=500&fit=crop&_gl=1*crf19p*_ga*NDAwNTIyNDM1LjE2NTg5OTQ3NzI.*_ga_8JE65Q40S6*MTY2Nzg1MzAxOC4xNi4xLjE2Njc4NTM0MzUuMC4wLjA."
                alt="Drink"
              />
            </PhotoView>
          </div>

          <div className="carousel-item mr-5">
            <PhotoView src="https://images.pexels.com/photos/2083842/pexels-photo-2083842.jpeg?cs=srgb&dl=pexels-chait-goli-2083842.jpg&fm=jpg&h=350&w=500&fit=crop&_gl=1*bxh1av*_ga*NDAwNTIyNDM1LjE2NTg5OTQ3NzI.*_ga_8JE65Q40S6*MTY2Nzg1MzAxOC4xNi4xLjE2Njc4NTM2NDEuMC4wLjA.">
              <img
                src="https://images.pexels.com/photos/2083842/pexels-photo-2083842.jpeg?cs=srgb&dl=pexels-chait-goli-2083842.jpg&fm=jpg&h=350&w=500&fit=crop&_gl=1*bxh1av*_ga*NDAwNTIyNDM1LjE2NTg5OTQ3NzI.*_ga_8JE65Q40S6*MTY2Nzg1MzAxOC4xNi4xLjE2Njc4NTM2NDEuMC4wLjA."
                alt="Drink"
              />
            </PhotoView>
          </div>

          <div className="carousel-item mr-5">
            <PhotoView src="https://images.pexels.com/photos/939328/pexels-photo-939328.jpeg?cs=srgb&dl=pexels-daan-stevens-939328.jpg&fm=jpg&h=350&w=500&fit=crop&_gl=1*rvucdd*_ga*NDAwNTIyNDM1LjE2NTg5OTQ3NzI.*_ga_8JE65Q40S6*MTY2Nzg1MzAxOC4xNi4xLjE2Njc4NTM3MTQuMC4wLjA.">
              <img
                src="https://images.pexels.com/photos/939328/pexels-photo-939328.jpeg?cs=srgb&dl=pexels-daan-stevens-939328.jpg&fm=jpg&h=350&w=500&fit=crop&_gl=1*rvucdd*_ga*NDAwNTIyNDM1LjE2NTg5OTQ3NzI.*_ga_8JE65Q40S6*MTY2Nzg1MzAxOC4xNi4xLjE2Njc4NTM3MTQuMC4wLjA."
                alt="Drink"
              />
            </PhotoView>
          </div>
        </div>

        <p className="font-bold text-green-400 mt-4 flex items-center gap-3 justify-end">
          SCROLL TO SEE MORE<FaArrowRight></FaArrowRight>
        </p>
      </div>
    </PhotoProvider>
  );
};

export default Gallery;
