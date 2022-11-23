import React from "react";
import PropTypes from "prop-types";

const Bookmark = ({ id, bookmark, onToggle }) => {
  return (
    <button className="btn btn-info" onClick={() => onToggle(id)}>
      <i className={"bi bi-" + (bookmark ? "asterisk" : "at")}></i>
    </button>
  );
};
Bookmark.propTypes = {
  id: PropTypes.string.isRequired,
  bookmark: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired
};

export default Bookmark;
