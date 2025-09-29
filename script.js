const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

// Track Attendance
let count = 0;
const maxCount = 50;

// Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  // Get form values
  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;

  console.log(name, teamName);

  //Increment Count
  count++;
  console.log("Total check-ins:", count);

  // Update attendee count on the page
  const attendeeCountSpan = document.getElementById("attendeeCount");
  attendeeCountSpan.textContent = count;

  // Update Progress Bar
  const percentage = Math.round((count / maxCount) * 100) + "%";
  console.log(`Progress: ${percentage}`);

  const progressBar = document.getElementById("progressBar");
  progressBar.style.width = percentage;

  // Team Counter
  const teamCounter = document.getElementById(`${team}Count`);
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

  const message = `Welcome, ${name} from ${teamName}`;

  // Show greeting message in the container, centered and visible
  const greeting = document.getElementById("greeting");
  greeting.textContent = message;
  greeting.style.display = "block";

  console.log(message);

  form.reset(); // Reset the form fields
});
