import React from "react";
import "./index.css";

const Card = ({ user }) => {
  return (
    <div className="card shadow-lg h-100   rounded-4">
      <div className="card-body p-4">
        <h4 className="fw-bold text-center my-3">{user.name}</h4>
        <p className="card-text">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="card-text">
          <strong>Phone:</strong> {user.phone}
        </p>
        <p className="card-text">
          <strong>Address:</strong> {user.address.street} {user.address.suite},{" "}
          {user.address.city}
        </p>
        <p className="card-text">
          <strong>Company:</strong> {user.company.name}
        </p>
        <p className="card-text">
          <strong>Website:</strong>{" "}
          <a href={`http://${user.website}`} target="_blank">
            {user.website}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Card;
