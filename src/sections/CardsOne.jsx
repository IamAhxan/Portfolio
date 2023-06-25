import React from "react";
import Service from "./CardOne";

const CardsOne = (props) => {
  const { data, title, id } = props
  return (
    <>
      <section className="cards" id={id}>
        <div className="title_div_center">
          <h2 className="title title_center title_secondary">{title}</h2>
        </div>
        <div className="row justify-content-around text-center container">
          {data.map((item) => {
            return <Service {...item} key={item.id} />;
          })}
        </div>
      </section>
    </>
  );
};

export default CardsOne;
