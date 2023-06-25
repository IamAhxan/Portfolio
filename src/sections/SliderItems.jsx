import React from 'react'

const SliderItems = (props) => {
    const { title, tech, img, link } = props;
    return (
        <>
            <div class="slider-one-items">
                <img src={img} alt="" />
                <div class="card-slider-content">
                    <h3>{title}</h3>
                    <p>
                        <strong>Technologies Used</strong> <br /> {tech}
                    </p>
                    <a
                        href={link}
                        class="btn"
                        target="_blank"
                    >
                        Visit Now
                    </a>
                </div>
            </div>
        </>
    )
}

export default SliderItems
