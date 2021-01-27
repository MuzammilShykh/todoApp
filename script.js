var selectedRow = null
var table = document.getElementsByTagName("table")[0];
var randomId = Math.random();
randomId = (randomId * 9999999);
  randomId = Math.ceil(randomId);




 function onFormSubmit() { 
  
  var newRow = table.insertRow(table.length);
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
  cel5.innerHTML =`<button type="button" class="btn btn-primary btn-sm buton" onclick="onClickEdit()">Edit</button>
                   <button type="button" class="btn btn-danger btn-sm buton" onclick="del()">Delete</button>`;

   // var formData = readFormData();
  // insertNewRecord(formData);
  resetForm();
  
 }

 function resetForm() {
  document.getElementById("date").value = "";
  document.getElementById("title").value = "";
  document.getElementById("discript").value = "";
  
  
}





































































// function onClickEdit(td) {
//   selectedRow = td.parentElement.parentElement;
//   document.getElementById("date").value = selectedRow.cells[0].innerHTML;
//   document.getElementById("title").value = selectedRow.cells[1].innerHTML;
//   document.getElementById("discript").value = selectedRow.cells[2].innerHTML;
 
// }


// function Del(td) {
 
//       row = td.parentElement.parentElement;
//       document.getElementById("table").deleteRow(row.rowIndex);
//       resetForm();
//   }




























 



// function readFormData() {
//   var formData = {};
//   formData["date"] = document.getElementById("date").value;
//   formData["title"] = document.getElementById("title").value;
//   formData["discript"] = document.getElementById("discript").value;
//   //formData["city"] = document.getElementById("city").value;
// //    var date = document.getElementById("date").value;
// //  var title = document.getElementById("title").value;
// //   var discription = document.getElementById("discript").value;
// //random number generator


// return formData;
// }

 



 //function insertNewRecord() {
 
//   var randomId = Math.random();
// randomId = (randomId * 9999999);
//  randomId = Math.ceil(randomId);

//   var table = document.getElementById("table").getElementsByTagName('tbody')[0];
//   var newRow = table.insertRow(table.length);

//   cell1 = newRow.insertCell(0);
//   cell1.innerHTML = data.randomId;
//   cell2 = newRow.insertCell(1);
//   cell2.innerHTML = data.date;
//   cell3 = newRow.insertCell(2);
//   cell3.innerHTML = data.title;
//   cell4 = newRow.insertCell(3);
//   cell4.innerHTML = data.discription;
//   cell5 = newRow.insertCell(4);

//   cell5.innerHTML = `<button class ="buton2" onClick="onEdit(this)">Edit</button>
//                      <button  class ="buton1" onClick="onDelete(this)">Delete</button>`;
// }











































// var datedata;
// var rindex;
// var btn;  
 //var table = document.getElementsByTagName("table")[0];


//function formData() {
            
 
  
//   //var firstRow = document.getElementById("tableRow1");
  
  
  
//   // random number generator
//   var randomId = Math.random();
//   randomId = (randomId * 9999999);
//   randomId = Math.ceil(randomId);



// var newRow = table.insertRow(table.length);
// // newRow.innerHTML =`<td>${randomId}</td><td>${date}</td><td>${title}</td><td>${discription}</td><td> <button type="button" class="btn btn-primary btn-sm buton" onclick="edit()">Edit</button>
// // <button type="button" class="btn btn-danger btn-sm buton" onclick="del()">Delete</button></td>` 
                           
// var cel1 = newRow.insertCell(0);
// var cel2 = newRow.insertCell(1);
// var cel3 = newRow.insertCell(2);
// var cel4 = newRow.insertCell(3);
// var cel5 = newRow.insertCell(4);

// var date = document.getElementById("date").value;
// var title = document.getElementById("title").value;
// var discription = document.getElementById("discript").value;


// cel1.innerHTML = randomId;
// cel2.innerHTML = date;
// cel3.innerHTML = title;
// cel4.innerHTML = discription;
// cel5.innerHTML =`<button type="button" class="btn btn-primary btn-sm buton" onclick="onClickEdit()">Edit</button><button type="button" class="btn btn-danger btn-sm buton" onclick="del()">Delete</button>`;


// firstRow.innerHTML =`<th>${randomId}</th><td>${date}</td><td>${title}</td><td>${discription}</td>`;
// table.innerHTML = `<tr><th>${randomId}</th><td>${date}</td><td>${title}</td><td>${discription}</td></tr>`
 //selectedRowToInput()
 
//}

// function onClickEdit() {
//   for (let i = 1; i < table.rows.length; i++) {
   
//     table.rows[i] = function()  {
//       document.getElementById("date").value = this.cells[0].innerHTML;
//       document.getElementById("title").value = this.cells[1].innerHTML;
//       document.getElementById("discript").value = this.cells[2].innerHTML;
//     }
//   }
  
//}
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
