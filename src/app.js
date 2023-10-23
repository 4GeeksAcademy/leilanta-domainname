import "bootstrap";
import "./style.css";

window.onload = function() {
  document.querySelector("#randomDomain").innerHTML = excuseGenerator();
  console.log(excuseGenerator());
};

function excuseGenerator() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  let randomPronoun = getRandomElement(pronoun);
  let randomAdj = getRandomElement(adj);
  let randomNoun = getRandomElement(noun);

  return pronoun[randomPronoun] + adj[randomAdj] + noun[randomNoun] + ".com";
}

function getRandomElement(ArrayCalcular) {
  return Math.floor(Math.random() * ArrayCalcular.length);
}