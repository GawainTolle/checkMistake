import React from "react";
import PropTypes from "prop-types";
import Bookmark from "../common/bookmark";
import Qualities from "./qualities";
import Table from "../common/table";
import { Link } from "react-router-dom";

const UsersTable = ({ users, onSort, sortBy, onDelete, ...rest }) => {
  const columns = {
    name: {
      iter: "name",
      name: "Имя",
      component: (user) => <Link to={`/users/${user._id}`}>{user.name}</Link>
    },
    qualities: {
      name: "Качества",
      component: (user) => (
        <Qualities key={user._id} qualities={user.qualities} />
      )
    },
    profession: { iter: "profession.name", name: "Профессия" },
    completedMeetings: { iter: "completedMeetings", name: "Встретился,раз" },
    rate: { iter: "rate", name: "Оценка" },
    bookmark: {
      iter: "bookmark",
      name: "Избранное",
      component: (user) => (
        <Bookmark id={user._id} bookmark={user.bookmark} {...rest} />
      )
    },
    delete: {
      component: (user) => (
        <button className="btn btn-danger" onClick={() => onDelete(user._id)}>
          Удалить
        </button>
      )
    }
  };
  return <Table {...{ data: users, onSort, columns, sortBy }} />;
};
UsersTable.propTypes = {
  users: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  sortBy: PropTypes.object.isRequired
};

export default UsersTable;
