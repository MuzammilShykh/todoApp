

var datedata;
var rindex;
var btn;  



function formData() {
            
 
  var table = document.getElementsByTagName("table")[0];
  //var firstRow = document.getElementById("tableRow1");
  
  
  
  // random number generator
  var randomId = Math.random();
  randomId = (randomId * 9999999);
  randomId = Math.ceil(randomId);



var newRow = table.insertRow(table.length);
// newRow.innerHTML =`<td>${randomId}</td><td>${date}</td><td>${title}</td><td>${discription}</td><td> <button type="button" class="btn btn-primary btn-sm buton" onclick="edit()">Edit</button>
// <button type="button" class="btn btn-danger btn-sm buton" onclick="del()">Delete</button></td>` 
                           
var cel1 = newRow.insertCell(0);
var cel2 = newRow.insertCell(1);
var cel3 = newRow.insertCell(2);
var cel4 = newRow.insertCell(3);
var cel5 = newRow.insertCell(4);

var date = document.getElementById("date").value;
var title = document.getElementById("title").value;
var discription = document.getElementById("discript").value;


cel1.innerHTML = randomId;
cel2.innerHTML = date;
cel3.innerHTML = title;
cel4.innerHTML = discription;
cel5.innerHTML =`<button type="button" class="btn btn-primary btn-sm buton" onclick="edit()">Edit</button><button type="button" class="btn btn-danger btn-sm buton" onclick="del()">Delete</button>`;


// firstRow.innerHTML =`<th>${randomId}</th><td>${date}</td><td>${title}</td><td>${discription}</td>`;
// table.innerHTML = `<tr><th>${randomId}</th><td>${date}</td><td>${title}</td><td>${discription}</td></tr>`
 //selectedRowToInput()

}


// function selectedRowToInput()
// {
    
//     for(var i = 1; i < table.rows.length; i++)
//     {
//         table.rows[i].onclick = function()
//         {
//           // get the seected row index
//           rIndex = this.rowIndex;

//           date = this.cells[0].innerHTML;
//         title = this.cells[1].innerHTML;
//         discription = this.cells[2].innerHTML;
          
//         }
//     }
// }
