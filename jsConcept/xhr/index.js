const fetchdata = document.getElementById("fetchdata");
let show = document.getElementById("show");

fetchdata.addEventListener("click", getData);

function getData() {
  str = "";
  const xhr = new XMLHttpRequest();

  xhr.open("GET",'biodata.json');

  xhr.onload = function () {
    let x = JSON.parse(this.response);
    str += `My Name is ${x.name} my age is ${x.age} and my profile is ${x.job}`;
    show.innerHTML = str;
  }
  xhr.send();
}


// function getData() {
//   str = "";
//   const xhr = new XMLHttpRequest();

//   xhr.open("GET",'biodata.json');

//   xhr.onload = function () {
//     let x = JSON.parse(this.response);
//     str += `My Name is ${x.name} my age is ${x.age} and my profile is ${x.job}`;
//     show.innerHTML = str;
//   }
//   xhr.send();
// }

//http://dummy.restapiexample.com/api/v1/create
