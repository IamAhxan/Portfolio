import React from "react";

const CardOne = (props) => {
  const { title, desc, icon, cssId, iconImg } = props;
  return (
    <>
      {cssId ? (
        <div className="col-md-3 one-card" id={cssId}>
          {icon ?
            <i
              className={icon}
              style={{ color: "#ffd93d", fontSize: "3rem" }}
            ></i> :
            <img src={iconImg} alt="" width={60} />
          }


          <h4 className="card_one_title">{title}</h4>
          <p className="card_one_description">{desc}</p>
        </div>
      ) : (
        <div className="col-md-3 one-card">
          {icon ?
            <i
              className={icon}
              style={{ color: "#0c134f", fontSize: "3rem" }}
            ></i> : <img src={iconImg} alt="" width={60} />}

          <h4 className="card_one_title">{title}</h4>
          <p className="card_one_description">{desc}</p>
        </div>
      )}
    </>
  );
};

export default CardOne;
