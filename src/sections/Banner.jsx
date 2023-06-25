import React, { useCallback } from "react";
import bannerImg from "/images/banner-developer-img.png";
import Typed from "typed.js";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useEffect, useRef } from "react";

const Banner = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "ReactJS Developer!",
        "WordPress Developer!",
        "Front-End Developer!",
      ], // Strings to display
      // Speed settings, try different values until you get good results
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 100,
      loop: true,
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <section className="row banner text-center align-items-center justify-content-between">
        <div className="firstSection col-lg-4 col-12 text-left">
          Hi There, This is{" "}
          <span className="custom-color" style={{ fontWeight: "600" }}>
            Ahsan,
          </span>
          <div>& i am a Passionate</div>
          <span
            ref={el}
            className="custom-color"
            style={{ fontWeight: "600" }}
          ></span>
          <br />
          <div className="bannerBtn">
            <a
              className="btn mr-2 heartbeat"
              href="./Download/Ahsan's Resume.pdf"
              download
            >
              Download Resume!
            </a>
            <a
              href="https://github.com/iamAhxan"
              target="_blank"
              className="btn heartbeat"
            >
              Visit Github!
            </a>
          </div>
          <br />
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            style={{
              position: "relative",
              zIndex: 1,
              margin: "auto",
            }}
            options={{
              fullScreen: { enable: false },
              fpsLimit: 120,
              interactivity: {
                detect_on: "canvas",
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "grab",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ffffff",
                },
                links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.4,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 6,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 170,
                },
                opacity: {
                  value: 0.6,
                },
                shape: {
                  type: "circle",
                },
              },
            }}
          />
        </div>
        <div className="secondSection col-lg-4 col-12">
          <img src={bannerImg} width="100%" alt="" />
        </div>
      </section>

      <hr />
    </>
  );
};

export default Banner;
