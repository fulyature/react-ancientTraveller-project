import React, { useState } from "react";

const AncientCard = ({ img, name, history }) => {
  const [show, setShow] = useState(true);
  return (
    <>
      <div onClick={() => setShow(!show)} role="button" className="cards">
        {show ? (
          <div className="on">
            <img className="card-img" src={img} alt="img" />
            <h3>{name}</h3>
          </div>
        ) : (
          <div className="arka">
            <p>🏛️{history[0]}</p>
            <p>🏛️{history[1]}</p>
            <p>🏛️{history[2]}</p>
            <p>🏛️{history[3]}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default AncientCard;
