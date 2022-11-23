import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ length }) => {
  const renderPhrase = () => {
    const lastOne = Number(length.toString().slice(-1));
    if (length > 4 && length < 15) return "человек тусанёт";
    if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанут";
    if (lastOne === 1) return "человек тусанёт";
    return "человек тусанёт";
  };
  return (
    <h1>
      <span className={"badge bg-" + (length > 0 ? "info" : "primary")}>
        {length
          ? `${length + " " + renderPhrase()} с тобой сегодня`
          : "Никто не тусанёт с тобой"}
      </span>
    </h1>
  );
};
SearchStatus.propTypes = {
  length: PropTypes.number.isRequired
};

export default SearchStatus;
