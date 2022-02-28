import React, { useState, useEffect } from "react";
import axios from "axios";
import { ListGroup, Badge } from "react-bootstrap";

const UserList = () => {
  const [listOfUser, setlistOfUser] = useState([]);

  const getUser = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response);
      setlistOfUser(response.data);
    });
  };

  useEffect(() => getUser(), []);

  return (
    <div className="listUser">
      <ListGroup as="ol" numbered>
        {listOfUser.map((users) => (
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{users.name}</div>
              {users.email}
            </div>
            <Badge bg="primary" pill>
              {users.username}
            </Badge>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default UserList;
