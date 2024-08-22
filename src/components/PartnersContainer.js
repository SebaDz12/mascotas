import React from "react";

const PartnersContainer = () => {
  const partners = [
    {
      name: "Partner 1",
      logo: "https://seeklogo.com/images/D/dog-chow-logo-949170140F-seeklogo.com.png",
    },
    {
      name: "Partner 2",
      logo: "https://1000marcas.net/wp-content/uploads/2021/06/Whiskas-logo.png",
    },
    {
      name: "Partner 3",
      logo: "https://www.zarla.com/images/zarla-mascota-co-1x1-2400x2400-20220111-gwkrbdqqcydm9yxwr636.png?crop=1:1,smart&width=250&dpr=20",
    },
    {
      name: "Partner 4",
      logo: "https://images.jumpseller.com/store/distribuidora-mdr/assets/Master_Dog.png?1681677110",
    },
  ];

  return (
    <div className="container text-center mt-5">
      <h5 className="mb-4">Nuestros Partners</h5>
      <div className="row justify-content-center">
        {partners.map((partner, index) => (
          <div className="col-md-2" key={index}>
            <img
              src={partner.logo}
              alt={partner.name}
              className="img-fluid"
              style={{ maxWidth: "100px", marginBottom: "15px" }}
            />
            <p>{partner.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersContainer;
