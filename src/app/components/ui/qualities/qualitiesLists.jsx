import React from "react";
import Quality from "./quality";
import PropTypes from "prop-types";

const QualitiesLists = ({ qualities }) => {
  return (
    <>
      {qualities.map((quality) => (
        <Quality key={quality._id} {...quality} />
      ))}
    </>
  );
};
QualitiesLists.propTypes = {
  qualities: PropTypes.array.isRequired
};

export default QualitiesLists;
