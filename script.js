const form = document.getElementById('checkInForm');
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

// Handle form submission
form.addEventListener("submit", function (event) {
event.preventDefault(); // Prevent default form submission

// Get form values
const name  = nameInput.value;  
const team = teamSelect.value;
const teamName = teamSelect.selectOptions [0].text;

console.log(name, teamName);

});


  
  

