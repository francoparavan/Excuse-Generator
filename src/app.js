/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#excuse").innerHTML = generateExcuse();
  //console.log("Hello Rigo from the console!");
};
function generateExcuse() {
  let who = ["El perro", "Mi abuela", "El cartero", "Mi pájaro"];
  let action = ["se comió", "orinó", "aplastó", "rompió"];
  let what = ["mi tarea", "mi teléfono", "el auto"];
  let when = [
    "antes de la clase",
    "cuando estaba durmiendo",
    "mientras hacía ejercicio",
    "durante mi almuerzo",
    "mientras rezaba"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
}
