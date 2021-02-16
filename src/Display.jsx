import React from "react";
import PropTypes from "prop-types";

const Display = ({ red, amber, green, onClick }) => (
  <div className="black-box" onClick={onClick}>
    <div className={`light ${red ? "red" : "inactive"}`} />
    <div className={`light ${amber ? "amber" : "inactive"}`} />
    <div className={`light ${green ? "green" : "inactive"}`} />
  </div>
);

Display.propType = {
  red: PropTypes.string.isRequired,
  amber: PropTypes.string.isRequired,
  green: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Display;
