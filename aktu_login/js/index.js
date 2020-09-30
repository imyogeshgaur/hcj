const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const rollno = document.getElementById('rollno');
const generate = document.getElementById('generate');
const idpass = document.getElementById('idpass');
const uname = document.getElementById('uname');
const pass = document.getElementById('pass');


function randomPassword(length) {
    var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    var pass = "";
    for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    return pass;
}

generate.addEventListener('click', () => {
    idpass.style.margin = "15rem 10rem";
    idpass.style.boxShadow = '-1px 9px 29px 13px rgb(0, 204, 255,0.75)';
    idpass.style.textAlign = 'Center';
    idpass.style.borderRadius = '.7rem';
    uname.innerHTML = `<h3>Your Generated Username for login is</h3><h1> ${fname.value.trim().toLowerCase()}.${lname.value.trim().toLowerCase()}@aktu.ac.in</h1> <br> <br>`;
    pass.innerHTML = `<h3>Your Generated Password for login is</h3><h1> ${randomPassword(8)}</h1>`;
});





