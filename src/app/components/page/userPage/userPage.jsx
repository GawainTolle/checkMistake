import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import Qualities from "../../ui/qualities";
import { useHistory } from "react-router-dom";
const UserPage = ({ id }) => {
  const [user, setUser] = useState();
  const history = useHistory();
  useEffect(() => {
    api.users.getById(id).then((data) => setUser(data));
  }, []);
  const handleBtn = () => {
    return history.push("/users");
  };
  if (user) {
    return (
      <div>
        <h1>{user.name}</h1>
        <h2>Профессия: {user.profession.name}</h2>
        <Qualities qualities={user.qualities} />
        <p>Встретился раз: {user.completedMeetings}</p>
        <h2>Оценка: {user.rate}</h2>
        <button className="btn btn-info" onClick={handleBtn}>
          Вернутся
        </button>
      </div>
    );
  }
};

UserPage.propTypes = {
  id: PropTypes.string.isRequired
};

export default UserPage;
