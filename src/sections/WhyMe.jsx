import React from 'react'
import ReactCompareImage from 'react-compare-image';
import imgBefore from '/images/Before.png'
import imgAfter from '/images/After.png'
import tailwindImg from '/images/Tailwind_CSS_Logo.png'
import photoshopImg from '/images/photoshop-icon.png'
import canvaImg from '/images/canva-icon-1.jpg'

const WhyMe = () => {
    return (
        <>
            <section className="why-me">
                <div className="title_div_center">
                    <h2 className="title title_center">Why Choose Me?</h2>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="why-me-content">

                            <h3 className="title title_left m-0">Why Choose Me?</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ducimus laboriosam, atque odit quaerat, doloribus qui reprehenderit, voluptate dolorum dignissimos explicabo esse quasi recusandae modi iure eos illo facere est accusamus. Ratione, ex repudiandae laborum enim fuga modi nulla mollitia molestiae consequatur hic qui, aspernatur, eaque beatae consectetur. Quo sapiente earum neque sint quidem, ipsa nobis similique perferendis at rerum laboriosam totam magnam est magni soluta saepe laudantium molestiae reprehenderit atque nesciunt dolorum ut ad? Recusandae, earum excepturi veniam corporis veritatis natus libero iste laudantium alias itaque et nobis, quam porro est voluptate aperiam ut consequuntur. Quo officiis ullam hic!
                            </p>
                            <h3 className="title title_left m-0">Skills</h3>
                            <div className="d-flex skill-icon flex-wrap" skills>
                                <i className="skill-fa fa-brands fa-html5"><span className="skill-icon-text"> - HTML</span></i>
                                <i className="skill-fa fa-brands fa-css3-alt"> <span className="skill-icon-text"> - CSS</span></i>
                                <i className="skill-fa fa-brands fa-sass"> <span className="skill-icon-text"> - Sass/Scss</span></i>
                                <i className="skill-fa fa-brands fa-bootstrap"> <span className="skill-icon-text"> - Bootstrap</span></i>
                                <div className="skills-img-logo">
                                    <img src={tailwindImg} alt="" width="30px" /> <span className="skill-icon-text"> - TailwindCSS</span>
                                </div>
                                <i className="skill-fa fa-brands fa-js"> <span className="skill-icon-text"> - Javascript</span></i>
                                <i className="skill-fa fa-brands fa-react" > <span className="skill-icon-text"> - ReactJS</span></i>

                                <i className="skill-fa fa-brands fa-wordpress" > <span className="skill-icon-text"> - WordPress</span></i>
                                <i className="skill-fa fa-brands fa-elementor" > <span className="skill-icon-text"> - Elementor</span></i>
                                <div className="skills-img-logo">
                                    <img src={photoshopImg} alt="" width={30} style={{ backgroundColor: '#fff', padding: 2, borderRadius: 10 }} /> <span className="skill-icon-text"> - Adobe Photoshop</span>
                                </div>
                                <div className="skills-img-logo">
                                    <img src={canvaImg} alt="" width={30} style={{ backgroundColor: '#fff', padding: 2, borderRadius: 10 }} /> <span className="skill-icon-text"> - Canva</span>
                                </div>



                            </div>
                        </div>
                    </div>


                    <div className="col-lg-6 col-md-12 compare">
                        <ReactCompareImage leftImage={imgBefore} rightImage={imgAfter} />
                    </div>
                </div>
            </section>
        </>
    )

}
export default WhyMe;