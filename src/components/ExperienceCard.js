import React, { useState } from "react";

const ExperienceCard = () => {
  const [experience, setExperience] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías enviar la experiencia a una base de datos o un servidor
    console.log("Experiencia enviada:", experience);
    setSubmitted(true);
  };

  return (
    <div className="card mt-5">
      <div className="card-body">
        <h5 className="card-title">Deja tu Experiencia</h5>
        {submitted ? (
          <div className="alert alert-success" role="alert">
            ¡Gracias por compartir tu experiencia!
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="experience">Tu experiencia</label>
              <textarea
                id="experience"
                className="form-control"
                rows="3"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Enviar
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
