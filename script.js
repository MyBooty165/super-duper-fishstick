let result = document.getElementById("result");

function append(value) {
  if (result.value === "0" && value !== ".") {
    result.value = value;
  } else {
    result.value += value;
  }
}

function clearDisplay() {
  result.value = "0";
}

function backspace() {
  result.value = result.value.slice(0, -1);
  if (result.value === "") {
    result.value = "0";
  }
}

function calculate() {
  try {
    result.value = eval(result.value);
  } catch (e) {
    result.value = "Error";
  }
}

// Add event listeners for keyboard support
document.addEventListener("keydown", function(event) {
  // Clear display on "C" or "Delete" key
  if (event.key === "c" || event.key === "C" || event.key === "Delete") {
    clearDisplay();
  }

  // Backspace on "Backspace" key
  if (event.key === "Backspace") {
    backspace();
  }

  // Calculate on "Enter" or "=" key
  if (event.key === "Enter" || event.key === "=") {
    calculate();
  }

  // Append digits and operators
  if (/[0-9+\-*/.]/.test(event.key)) {
    append(event.key);
  }
});
