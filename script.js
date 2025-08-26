// ===============================
// Part 1: Variables & Conditionals
// ===============================
function checkAge() {
  let age = prompt("Enter your age:");
  age = Number(age);

  if (age >= 18) {
    document.getElementById("ageResult").textContent = "You are an adult ✅";
  } else {
    document.getElementById("ageResult").textContent = "You are underage 🚫";
  }
}

// ===============================
// Part 2: Functions
// ===============================
// Function to calculate total cost
function calculateTotal(price, quantity) {
  let total = price * quantity;
  document.getElementById("totalResult").textContent = `Total: $${total}`;
  return total;
}

// Function to format a string
function formatString(str) {
  return str.trim().toUpperCase();
}

// ===============================
// Part 3: Loops
// ===============================
// Countdown using for loop
function showCountdown() {
  let result = "";
  for (let i = 5; i >= 1; i--) {
    result += i + " ";
  }
  document.getElementById("countdownResult").textContent = result;
}

// Loop through an array
const fruits = ["Apple", "Banana", "Mango", "Orange"];
fruits.forEach((fruit, index) => {
  console.log(`Fruit ${index + 1}: ${fruit}`);
});

// ===============================
// Part 4: DOM Manipulation
// ===============================
// Toggle visibility of a message
document.getElementById("toggleBtn").addEventListener("click", function () {
  const msg = document.getElementById("toggleMessage");
  msg.style.display = (msg.style.display === "none") ? "block" : "none";
});

// Add list items dynamically
document.getElementById("addItemBtn").addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.textContent = "New Item " + (document.querySelectorAll("#itemList li").length + 1);
  document.getElementById("itemList").appendChild(newItem);
});
