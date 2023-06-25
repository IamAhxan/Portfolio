import React from "react";

const Contact = (props) => {
  const { title, desc, icon, cssId, iconColor, link, target, iconImg } = props;

  {
    if (cssId) {
      return (
        <>
          {cssId ? (
            <div class="col-md-3 contact-card" id={cssId}>
              <a href={link} target={target}>
                {icon ?
                  <i
                    className={icon}
                    style={{ color: iconColor, fontSize: "3rem" }}
                  ></i> :
                  <img src={iconImg} alt="" width={60} />
                }
                <h4 class="contact-card-title">{title}</h4>
                <p class="contact-card-description">{desc}</p>
              </a>
            </div>
          ) : (
            <div class="col-md-3 contact-card">
              <a href={link} target={target}>
                {icon ?
                  <i
                    className={icon}
                    style={{ color: iconColor, fontSize: "3rem" }}
                  ></i> : <img src={iconImg} alt="" width={70} />}
                <h4 class="contact-card-title">{title}</h4>
                <p class="contact-card-description">{desc}</p>
              </a>
            </div>
          )}
        </>
      );
    }
  }
};

export default Contact;
