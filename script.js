
var newRow =""

function formData() {
    
var datedata = "" ;
var date = document.getElementById("date").value;
var table = document.getElementsByTagName("table")[0];
//var firstRow = document.getElementById("tableRow1");
var title = document.getElementById("title").value;
var discription = document.getElementById("discript").value;


// random number generator
var randomId = Math.random();
randomId = (randomId * 9999999);
randomId = Math.ceil(randomId);

 newRow = table.insertRow();
newRow.innerHTML =`<td>${randomId}</td><td>${date}</td><td>${title}</td><td>${discription}</td><td><button type="button" class="btn btn-primary btn-sm buton" onclick="edit()">Edit</button>
<button type="button" class="btn btn-danger btn-sm buton" onclick="del()">Delete</button></td>` 
                           
// var cel1 = newRow.insertCell(0);
// var cel2 = newRow.insertCell(1);
// var cel3 = newRow.insertCell(2);
// var cel4 = newRow.insertCell(3);
// var cel5 = newRow.insertCell(4);


// cel1.innerHTML = randomId;
// cel2.innerHTML = date;
// cel3.innerHTML = title;
// cel4.innerHTML = discription;
// cel5.innerHTML = `<button type="button" class="btn btn-primary btn-sm buton" onclick="edit()">Edit</button><button type="button" class="btn btn-danger btn-sm buton" onclick="del()">Delete</button>`

 
// firstRow.innerHTML =`<th>${randomId}</th><td>${date}</td><td>${title}</td><td>${discription}</td>`;
// table.innerHTML = `<tr><th>${randomId}</th><td>${date}</td><td>${title}</td><td>${discription}</td></tr>`



}


function del(){
   newRow = table.deleteRow();
       
     }

     function edit(){
        
           
         }