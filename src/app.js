/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let quien = ["El perro", "Mi abuela", "Mi periquito", "Un elefante"];
  let accion = ["comió", "rompió", "aplastó", "piso"];
  let que = ["mi tarea", "mi coche", "mi movil"];
  let cuando = [
    "antes de clase",
    "mientras estaba en el baño",
    "a la hora de merendar",
    "cuando salvaba al mundo",
    "mientras buscaba mis gafas"
  ];

  function generateExcuse() {
    let randomQuien = quien[Math.floor(Math.random() * quien.length)];
    let randomAccion = accion[Math.floor(Math.random() * accion.length)];
    let randomQue = que[Math.floor(Math.random() * que.length)];
    let randomCuando = cuando[Math.floor(Math.random() * cuando.length)];

    return `${randomQuien} ${randomAccion} ${randomQue} ${randomCuando}`;
  }
  document.getElementById("excusa").innerHTML = generateExcuse();
};
