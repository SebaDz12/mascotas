import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const CustomCard = ({ backgroundColor, textColor, imageSrc, title, link }) => {
  return (
    <div
      className="card"
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        borderRadius: "15px",
      }}
    >
      <div className="row g-0">
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <img
            src={imageSrc}
            alt={title}
            className="img-fluid"
            style={{ borderRadius: "15px 0 0 15px", padding: "10px" }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <Link
              to={link}
              className="btn btn-light"
              style={{ borderRadius: "20px" }}
            >
              Ver más
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
