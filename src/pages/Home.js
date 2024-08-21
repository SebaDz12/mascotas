import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card" style={{ backgroundColor: "#FF8C00" }}>
            <img
              src="https://i.pinimg.com/564x/e8/3d/fe/e83dfee602e7b2af7fae4e1fe9b04071.jpg"
              className="card-img-top"
              alt="Perrito"
            />
            <div className="card-body">
              <h5 className="card-title">Dale un Hogar a un Perrito</h5>
              <a
                href="http://localhost:3000/mascotas"
                className="btn btn-primary"
              >
                Ver más
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card" style={{ backgroundColor: "#1E90FF" }}>
            <img
              src="https://i.pinimg.com/564x/fa/31/31/fa3131e4dfa9b536453642d2d286a59a.jpg"
              className="card-img-top"
              alt="Gatito"
            />
            <div className="card-body">
              <h5 className="card-title">Dale un Hogar a un Gatito</h5>
              <a href="http://localhost:3000/gatos" className="btn btn-primary">
                Ver más
              </a>
            </div>
          </div>
        </div>
      </div>

      <h5>Ultimos Ingresos</h5>
      <div className="container mt-5">
        <div
          id="carouselExample"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="d-flex justify-content-around">
                <div className="card text-center" style={{ width: "18rem" }}>
                  <img
                    src="https://infoperros.org/wp-content/uploads/2018/07/husky-siberiano-corriendo-contento-en-el-jardin-300x200.jpg"
                    className="card-img-top"
                    alt="Imagen 1"
                  />
                  <div className="card-body"></div>
                </div>
                <div className="card text-center" style={{ width: "18rem" }}>
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/023/596/880/small/cute-chihuahua-puppy-on-a-walk-in-the-park-generative-ai-photo.jpg"
                    className="card-img-top"
                    alt="Imagen 2"
                  />
                  <div className="card-body"></div>
                </div>
                <div className="card text-center" style={{ width: "18rem" }}>
                  <img
                    src="https://www.animalfiel.com/wp-content/uploads/2019/03/temperamento-del-caniche-300x200.jpg"
                    className="card-img-top"
                    alt="Imagen 3"
                  />
                  <div className="card-body"></div>
                </div>
                <div className="card text-center" style={{ width: "18rem" }}>
                  <img
                    src="https://es.mypet.com/wp-content/uploads/sites/23/2021/03/ThinkstockPhotos-454238885.jpg?w=300"
                    className="card-img-top"
                    alt="Imagen 4"
                  />
                  <div className="card-body"></div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex justify-content-around">
                <div className="card text-center" style={{ width: "18rem" }}>
                  <img
                    src="https://www.diarioconstitucional.cl/wp-content/uploads/2024/05/pastor-belga-malinois_530_2_600-300x200.jpg "
                    className="card-img-top"
                    alt="Imagen 5"
                  />
                  <div className="card-body"></div>
                </div>
                <div className="card text-center" style={{ width: "18rem" }}>
                  <img
                    src="https://t1.uc.ltmcdn.com/es/posts/7/7/2/como_hacer_que_mi_perro_acepte_a_un_cachorro_20277_600.jpg"
                    className="card-img-top"
                    alt="Imagen 6"
                  />
                  <div className="card-body"></div>
                </div>
                <div className="card text-center" style={{ width: "18rem" }}>
                  <img
                    src="https://www.notigatos.es/wp-content/uploads/2016/02/gato_negro_callejero.jpg"
                    className="card-img-top"
                    alt="Imagen 7"
                  />
                  <div className="card-body"></div>
                </div>
                <div className="card text-center" style={{ width: "18rem" }}>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0118/9511/1737/files/2_20220306_121229_0001_480x480.png?v=1646587069"
                    className="card-img-top"
                    alt="Imagen 8"
                  />
                  <div className="card-body"></div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
