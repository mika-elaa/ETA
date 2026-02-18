//function validateForm() {
//    let x = document.forms["getNumber"]["Phone-number"].value;
//    if (x == "") {
  //      alert("Number must be filled out");
   //     return false;
    //}

//document.getElementById("nextBtn").addEventListener("click",
//   function(event){
//    event.stopImmediatePropagation()
//});


let btn = document.querySelector("#nextBtn");

btn.addEventListener('click', function(event) {
   alert("If the number is invalid/input is empty, you will not receive any queue updates.");
});