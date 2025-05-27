import React from "react";
import "./BredCrums.css";
import arrow_icons from "../../assets/images/arrow_icon.png";

const BredCrums = (props) => {
  const {product} = props;
  return (
    <div className="bredcrums">
      Home <img src={arrow_icons} alt="" height="30px" /> SHOP{" "}
      <img src={arrow_icons} alt="" height="10px" /> {product.name}{" "}
      <img src={arrow_icons} alt="" height="10px" />
      <img src={arrow_icons} alt="" height="10px" /> {product.category}{" "}
    </div>
  );
};

export default BredCrums;
