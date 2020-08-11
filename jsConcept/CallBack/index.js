const raw  = [
    { name:"Yogesh", fruit:"Orange", language:"Js" },
    { name:"Mukesh",fruit:"Mango",language:"Python"}
]

function newStudent(stud ,callback){
  setTimeout(() => {
      raw.push(stud);
      console.log(`New Student Enrolled`);
      callback()
  }, 500);
}

function returnStudent(){
    let nameOfStudent = '';
    let fruitsOfStudent = '';
    let languageOfStudent = '';
    setTimeout(() => {
        raw.forEach((x)=>{
            nameOfStudent += `<li>${x.name}</li>`
            fruitsOfStudent += `<li>${x.fruit}</li>`
            languageOfStudent += `<li>${x.language}</li>`
        });
        document.getElementById('list1').innerHTML = nameOfStudent
        document.getElementById('list2').innerHTML = fruitsOfStudent
        document.getElementById('list3').innerHTML = languageOfStudent
    }, 3000);

}
newStudent({name:"Hemant",fruit:"Banana",language:"C++"},returnStudent);