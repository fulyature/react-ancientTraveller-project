import React from "react";
import AncientCard from "./AncientCard";

const CardContainer = ({ data }) => {
  return (
    <div className="cardContainer">
      {data.map((item, index) => (
        <AncientCard key={index} {...item} />
      ))}
    </div>
  );
};

export default CardContainer;
