import React from "react";

const ExperienceContainer = ({ photo, name, city, comment }) => {
  return (
    <div
      className="card p-4"
      style={{
        borderRadius: "15px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        marginBottom: "20px",
      }}
    >
      <div className="d-flex align-items-center">
        <img
          src={photo}
          alt={name}
          className="rounded-circle"
          style={{ width: "80px", height: "80px", marginRight: "20px" }}
        />
        <div>
          <h5 className="mb-0" style={{ fontWeight: "bold" }}>
            {name}
          </h5>
          <small className="text-muted">{city}</small>
        </div>
      </div>
      <p className="mt-4" style={{ fontStyle: "italic", color: "#555" }}>
        "{comment}"
      </p>
    </div>
  );
};

export default ExperienceContainer;
