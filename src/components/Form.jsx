import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [name, setName] = useState();
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setSubmitted(false);
    setName(e.target.value);
  };

  const handleClick = () => {
    setSubmitted(true);
  };
  return (
    <div>
      <label className="label" htmlFor="name">
        Navn:
      </label>
      <input id="name" type="text" onChange={handleChange} />
      <button className="button" onClick={handleClick}>
        Lagre
      </button>
      {submitted ? (
        <p className="nameSubmitted">Du heter: {name}</p>
      ) : (
        <p className="nameNotSubmitted">Skriv inn navnet ditt!</p>
      )}
    </div>
  );
};

export default Form;






