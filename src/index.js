import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = props => {
  //ENTRADA, RODANDO , FIM
  const [estado, setEstado] = useState("ENTRADA");

  const [palpite, stePalpite] = useState(150);
  const [numPalpites, setNumPalpites] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(301);
    setNumPalpites(1);
    stePalpite(150);
  };

  if (estado === "ENTRADA") {
    return (
      <div className="telas">
        <h1>Pense num numero de 1 a 300</h1>
        <button onClick={iniciarJogo}>COMEÇAR A JOGAR</button>
      </div>
    );
  }
  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setMax(palpite);
    const proximoPalpite = parseInt((palpite - min) / 2) + min;
    stePalpite(proximoPalpite);
  };

  const maior = () => {
    setNumPalpites(numPalpites + 1);
    setMin(palpite);
    const proximoPalpite = parseInt((max - palpite) / 2) + palpite;
    stePalpite(proximoPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };

  if (estado === "FIM") {
    return (
      <div className="telas">
        <h1>
          O numero que você pensou foi : {palpite}, e eu dei {numPalpites}{" "}
          chute(s) para acertar
        </h1>
        <button onClick={iniciarJogo}> Jogar novamente </button>
      </div>
    );
  }
  // 0 <> 300
  //palpites que a maquina deu
  return (
    <div className="App">
      <p>O seu numero é {palpite} ?</p>
      <p>
        MIN: {min} / Max: {max}
      </p>
      <button onClick={menor}>Menor!</button>
      <button onClick={acertou}>Acertou!</button>
      <button onClick={maior}>Maior!</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
