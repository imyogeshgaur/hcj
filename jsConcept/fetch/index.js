let fetchdata = document.getElementById('fetchdata');
// let getData  = document.getElementById('getData');


// fetchdata.addEventListener('click',showData);

// function showData()
// {
//     fetch('http://dummy.restapiexample.com/api/v1/create',{
//         method:"POST",headers:{
//             'Content-Type':'application/json'
//         },
//         body:JSON.stringify({"name":"Yogesh","salary":"73534","age":"23"})
//     }).then(response=> response.json()).then(data=>{console.log(data)});
 
// }

fetchdata.addEventListener('click',showData);

function showData()
{
    fetch('http://dummy.restapiexample.com/api/v1/create',{
        method:"POST",headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({"name":1,"salary":73534,"age":23})
    }).then(response=> response.json()).then(json=>{console.log(json)});
 
}
