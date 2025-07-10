import React, { useState } from "react";
import "../../styles/index.css";
import Boton from "./Boton";

const Semaforo = () => {
  const [color, setColor] = useState("");
  const [purpleExist, setPurpleExist] = useState(false);

  function turnRed() {
    setColor("roja");
  }

  function turnGreen() {
    setColor("verde");
  }

  function turnYellow() {
    setColor("amarilla");
  }
  function turnPurple() {
    setColor("purp");
  }

  function alternar() {
    let funcionesActuales = [turnRed, turnGreen, turnYellow];
    if (purpleExist) {
      funcionesActuales.push(turnPurple);
    }

    const funcionAleatoria =
      funcionesActuales[Math.floor(Math.random() * funcionesActuales.length)];
    funcionAleatoria();
  }

  const btnPurp = () => {
    setPurpleExist((prev) => (purpleExist === false ? true : false));
  };

  return (
    <div>
      <div className="fondoSem d-flex flex-column align-items-center p-3 gap-3 ">
        <div
          className={`luz bg-danger ${color === "roja" ? "roja" : ""} `}
          onClick={() => turnRed()}
        ></div>
        <div
          className={`luz bg-warning ${color === "amarilla" ? "amarilla" : ""}`}
          onClick={() => {
            turnYellow();
          }}
        ></div>
        <div
          className={`luz bg-success ${color === "verde" ? "verde" : ""}`}
          onClick={() => {
            turnGreen();
          }}
        ></div>
        {purpleExist && (
          <div
            className={`luz bg-purp ${color === "purp" ? "purp" : ""}`}
            onClick={() => {
              turnPurple();
            }}
          ></div>
        )}
      </div>
      <div className="m-3">
        <Boton titulo="Alternar" onClick={alternar} />
        <Boton
          titulo={`${purpleExist ? "Ocultar" : "Mostrar"}`}
          onClick={btnPurp}
        />
      </div>
    </div>
  );
};

export default Semaforo;
