let timeoutId;

function startTimer() {
  timeoutId = setTimeout(() => window.alert("Hello"), 3000);
  console.log("STARTED");
}
//used arrow function

function clearTimer() {
  clearTimeout(timeoutId);
  console.log("CLEARED");
}
