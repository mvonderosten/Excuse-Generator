/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = () => {
  let randomNumber = Math.random() * 10;
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
  console.log("Help Me!");
};

let generateExcuse = () => {
  let who = ["The Dog ", "My Grandma ", "Paul's Turtle ", "My Bird "];
  let what = ["ate me ", "pissed on me ", "crushed me ", "mentally broke me "];
  let when = [
    "before the class",
    "before I pushed to git",
    "when I finished",
    "during my lunch break",
    "while I was praying"
  ];

  let whoIndx = Math.floor(Math.random() * who.length);
  let whatIndx = Math.floor(Math.random() * what.length);
  let whenIndx = Math.floor(Math.random() * when.length);

  return who[whoIndx] + "" + what[whatIndx] + "" + when[whenIndx];
};
