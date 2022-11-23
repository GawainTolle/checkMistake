import React, { useState, useEffect } from "react";
import api from "../../../api";
import UsersTable from "../../ui/usersTable";
import _ from "lodash";
import GroupList from "./../../common/groupLIst";
import { paginate } from "./../../../utils/paginate";
import Pagination from "./../../common/pagination";
import SearchStatus from "./../../ui/searchStatus";

const usersListPage = () => {
  const pageSize = 8;
  const [activePage, setActivePage] = useState(1);
  const [professions, setProfessions] = useState();
  const [activeProf, setActiveProf] = useState();
  const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" });

  const [users, setUsers] = useState();
  useEffect(() => {
    api.users.fetchAll().then((data) => setUsers(data));
  });
  const handleDelete = (id) => {
    setUsers(users.filter((user) => user._id !== id));
  };
  const handleToggleBookmark = (id) => {
    setUsers(
      users.map((user) => {
        if (user._id === id) {
          return { ...user, bookmark: !user.bookmark };
        }
        return user;
      })
    );
  };

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfessions(data));
  }, []);
  useEffect(() => {
    setActivePage(1);
  }, [activeProf]);
  const handleActivePage = (id) => {
    setActivePage(id);
  };
  const handleActiveProf = (id) => {
    setActiveProf(id);
  };
  const handleSort = (id) => {
    setSortBy(id);
  };
  if (users) {
    const filteredUsers = activeProf
      ? users.filter(
          (user) =>
            JSON.stringify(user.profession) === JSON.stringify(activeProf)
        )
      : users;
    const usersLength = filteredUsers.length;
    const sortedUsers = _.orderBy(filteredUsers, [sortBy.iter], [sortBy.order]);
    const cropUsers = paginate(sortedUsers, pageSize, activePage);
    const clearFilter = () => {
      setActiveProf();
    };
    return (
      <div className="d-flex">
        {professions && (
          <div className="d-flex flex-column">
            <GroupList
              {...{
                items: professions,
                activeItem: activeProf,
                onItem: handleActiveProf
              }}
            />
            <button className={"btn btn-info"} onClick={clearFilter}>
              Очистить
            </button>
          </div>
        )}
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-center">
            <SearchStatus length={usersLength} />
          </div>
          {usersLength > 0 && (
            <UsersTable
              {...{
                users: cropUsers,
                onSort: handleSort,
                sortBy,
                onDelete: handleDelete,
                onToggle: handleToggleBookmark
              }}
            />
          )}
          <div className="d-flex justify-content-center">
            <Pagination
              {...{
                pageSize,
                usersLength,
                activePage,
                onPage: handleActivePage
              }}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <h2>
        <span className="badge bg-info">loading...</span>
      </h2>
    );
  }
};

export default usersListPage;
