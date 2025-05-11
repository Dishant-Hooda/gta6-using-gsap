import React, { use, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

function App() {
  const [showContent, setShowContent] = useState(false);

  // GSAP animation for the SVG mask

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      rotate: 0,
      scale: 1,
      delay: -1,
      duration: 2,
      ease: "Expo.easeInOut",
    })
     gsap.to(".sky", {
      rotate: 0,
      scale: 1.2,
      delay: -.8,
      duration: 2,
      ease: "Expo.easeInOut",
    })
    gsap.to(".bg", {
      rotate: 0,
      scale: 1.1,
      delay: -1,
      duration: 2,
      ease: "Expo.easeInOut",
    })
     gsap.to(".character", {
      rotate: 0,
      x: "-50%",
      bottom: "-55%",
      scale: 1,
      delay: -1,
      duration: 2,
      ease: "Expo.easeInOut",
    })
  

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".imagesdiv .text", {
        x: `${xMove * 0.5}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-10 w-full py-10 px-10">
              <div className="logo flex gap-7">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-12 h-1 bg-white "></div>
                  <div className="line w-8 h-1 bg-white "></div>
                  <div className="line w-6 h-1 bg-white "></div>
                </div>
                <h3 className="text-4xl -mt-[9px] leading-none text-white">
                  Rockstar
                </h3>
              </div>
            </div>

            <div className="imagesdiv relative w-full h-screen overflow-hidden">
              <img
                src="./sky.png"
                alt="sky"
                className="sky w-full h-full object-cover absolute top-0 left-0 scale-[1.7] rotate-[-15deg]"
              />
              <img
                src="./bg.png"
                alt="img"
                className="bg w-full h-full object-cover absolute top-0 left-0 scale-[1.8] rotate-[-3deg]"
              />
              <div className="text absolute top-18 left-1/2 -translate-x-1/2 text-white">
                <h1 className="text-[10rem] leading-none -ml-40">Grand</h1>
                <h1 className="text-[10rem] leading-none ml-20">Theft</h1>
                <h1 className="text-[10rem] leading-none -ml-30">Auto</h1>
              </div>
              <img
                className="absolute character -bottom-[170%] left-1/2 -translate-x-1/2 scale-[3] rotate-[-20deg]"
                src="./girlbg.png"
                alt="girl"
              />
            </div>
            <div className="btmbar text-white w-full py-15 px-10 bg-gradient-to-t from-black to-transparent absolute bottom-0 left-0">
              <div className="scrolldown flex gap-4 items-center">
                <i className="ri-arrow-down-line text-4xl"></i>
                <h3 className="font-[Helvitica_Now_Display] text-xl">
                  Scroll Down
                </h3>
              </div>

              <img
                src="./ps5.png"
                alt=""
                className="h-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>

          <div className="w-full h-screen flex items-center justify-center bg-black ">
            <div className="cntnr flex text-white w-full h-[80%]">
              <div className="limg relative w-1/2 h-full">
                <img
                  src="./imag.png"
                  alt="img"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                />
              </div>
              <div className="rimg w-[40%]">
                <h1 className="text-8xl">Still Running,</h1>
                <h1 className="text-8xl">Not Hunting</h1>
                <p className="mt-10 text-xl font-sans">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam fuga ipsa non cumque eius obcaecati beatae dolorem? Praesentium unde nesciunt consectetur natus reprehenderit!</p>
                <p className="mt-5 text-xl font-sans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magnam voluptatibus aliquam sit.</p>
                <p className="mt-10 text-xl font-sans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magnam voluptatibus aliquam sit.</p>

                <button className="bg-yellow-500 px-10 py-10 text-3xl text-black mt-10 hover:bg-yellow-600 hover:shadow-[5px_5px_0px_0px_rgba(109,40,217)] transition-all duration-300">Download Now!</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
