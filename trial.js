const nextBtn = document.querySelector("#trialNextBtn")
const input = document.querySelector("#form")

function checkValidity(number) {
 if (input === null) {
    nextBtn.addEventListener('click', function(event) {
    alert("You didn't submit your phone number!")
    })
 }
}

