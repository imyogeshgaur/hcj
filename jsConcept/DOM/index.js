let division1 = document.getElementById("_div1");
let division2 = document.getElementById("_div2");
let division3 = document.getElementById("_div3");
let header1 = document.createElement("h1");
let header2 = document.createElement("h2");
let anchor = document.createElement("a");
let body = document.getElementById("body");
let btn = document.createElement("button");

const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();

header1.innerHTML = `<h1>${date}</h1>`;
header2.innerHTML = `<h1>${time}</h1>`;

header1.style.backgroundColor = "blue";
header1.style.color = "red";
division1.style.display = "flex";
division1.style.flexDirection = "row";

header2.style.backgroundColor = "blue";
header2.style.color = "red";
division2.style.display = "flex";
division2.style.flexDirection = "row";

btn.innerText = "Click Me";
console.log(btn);
btn.addEventListener("click", () => {
  console.log("Button Clicked ");
});

btn.addEventListener("dblclick", () => {
  alert("Double Clicked !!!");
});
body.addEventListener('mousemove',(event)=>{
    header1.style.backgroundColor=`rgb(${event.x},${event.y},${event.y+event.x})`;
    // console.log(event.x,event.y);
});

body.addEventListener('mousemove',(event)=>{
    header2.style.backgroundColor=`rgb(${event.x},${event.y},${event.y-event.x})`;
    // console.log(event.x,event.y);
});

division1.appendChild(header1);
division2.appendChild(header2);
division3.appendChild(btn);

// let html = document.createElement('html')
// let body = document.createElement('body')
// let h1 = document.createElement('h1');

// h1.innerText = `Hello World !!!`;
// body.appendChild(h1)
// html.appendChild(body)

// let s = document.querySelector('html')
// console.log(s);
