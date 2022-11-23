import React from "react";
import PropTypes from "prop-types";

const Quality = ({ _id, name, color }) => {
  return (
    <span key={_id} className={"badge m-2 bg-" + color}>
      {name}
    </span>
  );
};
Quality.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};
export default Quality;
