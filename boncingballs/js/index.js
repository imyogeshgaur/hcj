let elem1 = document.getElementById("1");
let elem2 = document.getElementById("2");
let elem3 = document.getElementById("3");
let elem4 = document.getElementById("4");
let elem5 = document.getElementById("5");
let elem6 = document.getElementById("6");
let elem7 = document.getElementById("7");

let div = document.getElementById("div");

let reset = document.getElementById("reset");

elem1.addEventListener("mouseenter", function colorChange(e) {
  div.style.backgroundColor = `rgb(${30 + e.offsetY},${255 - e.offsetY},${30})`;
});
elem1.addEventListener("mouseleave", function Reset() {
  div.style.backgroundColor = `rgb(${255},${255},${255})`;
});
elem2.addEventListener("mouseenter", function colorChange(e) {
  div.style.backgroundColor = `rgb(${255 - e.offsetY},${60 + e.offsetY},${60})`;
});
elem2.addEventListener("mouseleave", function Reset() {
  div.style.backgroundColor = `rgb(${255},${255},${255})`;
});
elem3.addEventListener("mouseenter", function colorChange(e) {
  div.style.backgroundColor = `rgb(${120 + e.offsetY},${
    255 - e.offsetY
  },${90})`;
});
elem3.addEventListener("mouseleave", function Reset() {
  div.style.backgroundColor = `rgb(${255},${255},${255})`;
});
elem4.addEventListener("mouseenter", function colorChange(e) {
  div.style.backgroundColor = `rgb(${255 - e.offsetY},${
    120 + e.offsetY
  },${120})`;
});
elem4.addEventListener("mouseleave", function Reset() {
  div.style.backgroundColor = `rgb(${255},${255},${255})`;
});
elem5.addEventListener("mouseenter", function colorChange(e) {
  div.style.backgroundColor = `rgb(${120 + e.offsetY},${
    255 - e.offsetY
  },${150})`;
});
elem5.addEventListener("mouseleave", function Reset() {
  div.style.backgroundColor = `rgb(${255},${255},${255})`;
});
elem6.addEventListener("mouseenter", function colorChange(e) {
  div.style.backgroundColor = `rgb(${e.offsetY},${60 + e.offsetY},${180})`;
});
elem6.addEventListener("mouseleave", function Reset() {
  div.style.backgroundColor = `rgb(${255},${255},${255})`;
});
elem7.addEventListener("mouseenter", function colorChange(e) {
  div.style.backgroundColor = `rgb(${60 + e.offsetY},${
    255 - e.offsetY
  },${210})`;
});
elem7.addEventListener("mouseleave", function Reset() {
  div.style.backgroundColor = `rgb(${255},${255},${255})`;
});
