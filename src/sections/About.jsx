import React from "react";
import aboutImg from "/images/about-image.png";
import developerImg from "/images/developer.webp";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="title_div_center">
          <h2 className="title title_center">About Me</h2>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6 col-12 about-content">
            <h3 className="title title_left m-0">Who i Am?</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
              blanditiis illo numquam ut dolorem itaque eaque inventore
              perferendis deleniti minima magni sapiente velit vero eum ipsam
              exercitationem excepturi, beatae quas. Accusantium aliquid
              blanditiis, praesentium optio dicta, quam, minima recusandae
              repellat debitis sed fugiat. Quo laborum, eveniet magni possimus
              dolorem eius perferendis corrupti corporis sint placeat porro,
              repellat et. Deserunt molestias rerum saepe sit iure placeat,
              suscipit magnam doloribus ab dicta officiis a dolore distinctio
              fugiat deleniti? Dolores, impedit? Beatae voluptates, quam quidem,
              sapiente distinctio facere consequuntur nobis debitis, facilis
              vero quasi? Excepturi error ea accusamus fuga veniam similique
              corrupti dignissimos!
            </p>
          </div>
          <div className="col-md-6 col-12 about-img">
            <img src={aboutImg} alt="" />
          </div>
        </div>
      </section>

      {/* Experience */}

      <section className="experience">
        <div className="title_div_right animate animate__bounce" id="animate">
          <span className="text-grey">What I have done so far</span>
          <h3 className="title title_left ">My Experience</h3>
        </div>
        <div className="box row justify-content-around">
          <div className="vertical col-lg-2 col-md-3">
            <img src={developerImg} alt="" className="img-top" />
            <div className="vertical-content-position">
              <div className="vertical-title">Front-End Developer</div>

              <div className="text-grey vertical-company">
                Mohsin Shaheen Construction Company (April, 2021 - June, 2021)
              </div>
              <div className="vertical-desc text-grey">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
                dignissimos.
              </div>
            </div>
          </div>
          <div className="vertical col-lg-2 col-md-3">
            <img src={developerImg} alt="" className="img-top" />
            <div className="vertical-content-position">
              <div className="vertical-title">Front-End Developer</div>

              <div className="text-grey vertical-company">
                ExciteBrand UK <br />
                (July, 2021 - April, 2022)
              </div>
              <div className="vertical-desc text-grey">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
                dignissimos.
              </div>
            </div>
          </div>
          <div className="vertical col-lg-2 col-md-3">
            <img src={developerImg} alt="" className="img-top" />
            <div className="vertical-content-position">
              <div className="vertical-title">WordPress Developer</div>

              <span className="text-grey vertical-company">
                Vitsol (May, 2022 - June, 2022)
              </span>
              <div className="vertical-desc text-grey">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
                dignissimos.
              </div>
            </div>
          </div>
          <div className="vertical col-lg-2 col-md-3">
            <img src={developerImg} alt="" className="img-top" />
            <div className="vertical-content-position">
              <div className="vertical-title">
                Front-End Developer,
                <br />
                WordPress Developer
                <br />
              </div>

              <span className="text-grey vertical-company">
                Freelancing (2020 - Current)
              </span>
              <div className="vertical-desc text-grey">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
                dignissimos.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
