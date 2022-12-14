import React from "react";
import UserPage from "../components/page/userPage";
import UsersListPage from "../components/page/usersListPage";
import { useParams } from "react-router-dom";

const Users = () => {
  const params = useParams();
  const { userId } = params;
  return <>{userId ? <UserPage id={userId} /> : <UsersListPage />}</>;
};

export default Users;
